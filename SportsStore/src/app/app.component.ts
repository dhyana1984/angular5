import { Component } from '@angular/core';

@Component({
  selector: 'app',
  // template: `<div class="bg-success p-a-1 text-xs-center">This is SportsStore</div>` //这里的属性是template，不是templateURL
  template:"<router-outlet></router-outlet>"
})
export class AppComponent {

}
