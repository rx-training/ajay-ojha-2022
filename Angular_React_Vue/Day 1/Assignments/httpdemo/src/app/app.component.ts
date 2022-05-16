import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { User } from './Models/Users';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpdemo';
  userprofile: FormGroup;
  user!: User;
  users: Array<User> = [];
  usernew: any;
  constructor(private userservice: UserserviceService, private fb: FormBuilder) {
    this.userprofile = this.fb.group({
      id:[0],
      name: [""],
      email: [""],
      gender: [""],
      status: [""]
    })


  }
  ngOnInit(): void {
    this.userservice.getUsers().subscribe((p: Array<User>) => {
      this.users = p;
    })
  }
  postinfo() {
    console.log(this.userprofile.value);
    this.user = this.userprofile.value;
    this.userservice.postUser(this.user).subscribe((arg: User) => {

      this.user = arg
      this.ngOnInit();
      console.log(this.user);

    });

  }
  editinfo(user:User)
  {
    this.userprofile.setValue(user);
  }
  updateinfo()
  {
    this.user = this.userprofile.value;
    this.userservice.putUser(this.user,this.user.id).subscribe((arg: User) => {
       this.user = arg
      console.log(this.user);

    });
    
  }
}
