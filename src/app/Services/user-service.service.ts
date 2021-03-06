import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  url = "http://localhost:3000/user";
  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get(this.url);
  }

  postUser(data:any){
    return this.http.post(this.url,data);
  }

  updateUser(id: any,data: any)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }
  // activation(id: any,data: any)
  // {
  //   return this.http.put(`${this.url}/${id}`,data);
  // }
}
