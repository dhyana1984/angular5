import{
    Directive, SimpleChange,ViewContainerRef, TemplateRef, Input,IterableDiffer,IterableDiffers,
    CollectionChangeRecord,ChangeDetectorRef,ViewRef,DefaultIterableDiffer
} from "@angular/core";



@Directive({
    selector:"[paForOf]"
})
export class PaIteratorDirective{
    private differ:DefaultIterableDiffer<any> ;
    private views: Map<any, PaIteratorContext> = new Map<any,PaIteratorContext>();
    constructor(private container: ViewContainerRef, 
                private template:TemplateRef<object>,
                private differs:IterableDiffers,
                private changeDetector:ChangeDetectorRef
                ){

    }

    @Input("paForOf")
    dataSource: any;
    ngOnInit(): void {
        //differ => IterableDiffer对象用于设置数据源集合变更检测
        //differs.find接受一个对象并返回一个能够为该对象创建差异器的IterableDifferFactory对象
        //IterableDifferFactory定义了create方法，返回一个IterableDiffer对象
        this.differ = <DefaultIterableDiffer<any>>this.differs.find(this.dataSource).create();
        //this.updateContent();
    }
    //使用ngDoCheck必须非常小心，在页面上触发焦点，点击，等等事件都会调用此方法。会有严重性能问题，所以要用差异比较器，只在模型增加和删除时调用ngDoCheck
    ngDoCheck(): void {
      
        //变更检测机制重要部分是IterableDiffer对象，被赋给了differ属性
        //IterableDiffer.diff方法接受一个对象进行比较，并返回变更列表，如果没有变更，则返回null
        let changes = this.differ.diff(this.dataSource);
        if(changes!=null){
            console.log("ngDoCheck Called, changes detected");
            //forEachAddedItem方法的函数参数，这个函数参数接收一个IterableChangeRecord对象，对集合中每个新对象调用指定函数
            //addition就是一个IterableChangeRecord对象 
            //item是IterableChangeRecord返回数据项，trackById如果使用trackBy函数，这个返回IterableChangeRecord标识值,currentIndex返回IterableChangeRecord当前索引
            changes.forEachAddedItem(addition =>{
                let context = new PaIteratorContext(addition.item, addition.currentIndex,changes.length);
                context.view = this.container.createEmbeddedView(this.template, context);
                this.views.set(addition.trackById, context);//使用set方法设置map
            });

            //响应删除
            let removals = false;
            //删除第一步
            //从map中检索相应的PaIteratorContext对象，
            //获取其ViewRef对象并将该对象传给ViewContainerRef.reomve方法
            //从视图容器中删除与该对象关联的内容
            changes.forEachRemovedItem(removal =>{
                removals= true;
                let context =this.views.get(removal.trackById);//通过get方法检索
                if(context != null ){
                    this.container.remove(this.container.indexOf(context.view));
                    this.views.delete(removal.trackById);//使用delete删除map的项
                }
            });

            //删除第二步，更新剩余对象的上下文数据，使得依赖视图容器中视图位置的绑定得到正确更新
            if(removals){
                let index= 0 ;
                //针对Map中每个上下文对象调用PaIteratorContext.setData方法更新视图在容器中的位置，并更新总数
                this.views.forEach(context => {
                    context.setData(index++, this.views.size);
                })
            }
        }
       
      
    }

    private updateContent(){
        this.container.clear();
        for(let i =0; i< this.dataSource.length; i++){
             //TemplateRef提供要插入到容器的内容，上下文对象为隐式值提供了数据，使用$implicit指定
             //正是$implicit属性被赋给模板变量item
            this.container.createEmbeddedView(
                this.template, 
                new PaIteratorContext(this.dataSource[i],i,this.dataSource.length)
                );
         }
    }
}



class PaIteratorContext{
    odd:boolean;
    even:boolean;
    first:boolean;
    last:boolean;
    view:ViewRef;
    constructor(public $implicit:any, public position:number, total :number){

        this.setData(position,total)
        //处理属性级数据变更，单个对象的属性改变，例如价格会上升，Angular会自动处理这种变更
        // setInterval(() => {
        //     this.odd = !this.odd;
        //     this.even =!this.even;
        //     this.$implicit.price++;
        // }, 2000);
    }
    setData(index:number, total: number){
        this.odd= index%2 ==1;
        this.even = !this.odd;
        this.first = index==0;
        this.last= index==total-1;
    }


}
