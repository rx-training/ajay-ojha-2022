import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentdemo';
count:number=0;
data:Array<any>=[];

display(arr:Array<string>)
{
this.count=arr.length;
this.data=arr;

}

}
