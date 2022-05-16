import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  hosturl="https://gorest.co.in/public/v2/";
  token="33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
  constructor(private http:HttpClient) { 

  }
  getUsers()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
  var call= this.http.get<Array<User>>(`${this.hosturl}users`,httpOptions) 
  return call;
   }

  postUser(user:User)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
   return this.http.post<User>(`${this.hosturl}users/1`,user,httpOptions)

  }
  putUser(user:User,id:number)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
      return this.http.put<User>(`${this.hosturl}users/${id}`,user,httpOptions)

    }
  }
