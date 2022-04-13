import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
message="Greeting of the Day!!!"


status:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }

  submitinfo()
  {
    console.log(this.message)
  }

}
