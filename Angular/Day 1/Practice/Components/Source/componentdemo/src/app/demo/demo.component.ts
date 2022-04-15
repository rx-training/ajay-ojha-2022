import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
    @Input() userData:any={};
    @Input() nameKey:string="";
   
  ngOnInit(): void {
  }

}
