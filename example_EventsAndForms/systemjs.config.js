(function(global){
    var paths={
        "rxjs/*":"node_modules/rxjs/bundles/Rx.min.js",
        "@angular/*" :"node_modules/@angular/*"
    }

    var packages={"app": {}};
    //手工导入angular模块后要在这里加入
    var angularModules= ["common","compiler","core","platform-browser","platform-browser-dynamic","forms"];
    angularModules.forEach(function(pkg){
        packages["@angular/" + pkg] ={
            main:"/bundles/" + pkg +".umd.min.js"
        };
    });
    System.config({paths:paths,packages:packages})
})(this)