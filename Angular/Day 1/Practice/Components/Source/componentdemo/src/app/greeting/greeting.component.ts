import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
 message="Greeting of the Day!!!"
  @Output() getValue= new EventEmitter<any>();
 tasklist:Array<string>=[];

status:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }

  submitinfo()
  {
    this.tasklist.push(this.message);
    this.getValue.emit(this.tasklist);
    //console.log(this.message)
  }

}
