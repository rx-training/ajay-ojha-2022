import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
        show:boolean=true;    
        num1=67;
        num2=45
        

        list=[{"EmployeeID":1,"Name":"Rita","Standard":"Ist","Grade":"A+"},{"EmployeeID":2,"Name":"Meghna","Standard":"2nd","Grade":"A"}];
      constructor() { }

      ngOnInit(): void {
  }

  get Compare()
  {
    if(this.num1>this.num2)
    {
      return true
    }
    else
    {
      return false;
    }
  }

   displayGrade(object:any)
  {
    if(object.Grade=="A+")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  toggle()
  {
    this.show=!this.show;
  }

}
