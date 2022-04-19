import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';


@Component({
  selector: 'app-formsdemo',
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent implements OnInit {

  profileForm :FormGroup
  constructor(private formbuilder:FormBuilder) {
// this.profileForm=new FormGroup(
// {
//   Name:new FormControl(),
//   Address:new FormGroup(
//    { 
//      FlatNumber:new FormControl(101),
//      Area:new FormControl(),
//      City:new FormControl(),
//      State:new FormControl()
//    }
//   ),
//   Hobbies:new FormArray([new FormControl("badminton"),new FormControl("chess")])
// }

// );

this.profileForm=this.formbuilder.group({
  Name:["",Validators.compose([Validators.required,Validators.email])],
  Address:this.formbuilder.group({
    FlatNumber:[],
         Area:[],
         City:[],
         State:[]
  }),
  Hobbies:this.formbuilder.array([new FormControl(),new FormControl()])
})

   }

   get getHobbies()
   {
     return this.profileForm.get("Hobbies") as FormArray;
   }

  ngOnInit(): void {
  }
  submitdata()
  {
    console.log(this.profileForm.status);
  }

  addhobbies()
  {
    this.getHobbies.push(new FormControl());
  }

  get getName()
  {
    return this.profileForm.get("Name") as FormControl;
  }

}
