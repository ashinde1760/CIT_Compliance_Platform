import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modal/user';
import { UserServiceService } from 'src/app/Services/user-service.service';

interface Role {
  role?: string
}



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 //for activation part
 checked1: boolean = false;
 checked2: boolean = true;

 //variable for fetching data
 user1:User[] = [];

 user!: User;

 submitted?:boolean;

 userDialogue?:boolean;
 userEditDialogue?:boolean;

 selectedUser!:boolean;

 roles!:any[];

 selectedRole!:string;



 constructor(private obj:UserServiceService) {

  this.roles=[
    {role:'Project Team Member'},
    {role:'Project Manager'},
    {role:'Quality Manager'},
    {role:'Project Partner'},
    {role:'IT Admin'},
    {role:'Buisness Admin'}
  ];
 }

 

 ngOnInit(): void {

   //fetching data from service method and display all data here...

   this.obj.getUserData().subscribe((result:any)=>{
     this.user1 = result;
   })
 }


//to open dialog box
 addUser(){
   this.user={};
   this.submitted=false;
   this.userDialogue=true;
 }
//to hide dialog box
 hideDialog(){
   this.userDialogue=false;
   this.submitted=false;
 }

 //save client information
 saveUser(){
   this.submitted=true;
   if(this.user.name?.trim()){
     if(this.user.id){
      this.user.role=this.selectedRole;
       this.obj.updateUser(this.user.id,this.user).subscribe((result)=>{
       window.location.reload();
     })  
   }
   else 
   {
      this.user.role=this.selectedRole;
       this.user.id = this.createId();
       this.user1.push(this.user);
       this.obj.postUser(this.user).subscribe((result)=>{
       window.location.reload();
       })
   }
   
   
   this.userDialogue = false;
   this.user = {};

 }   
}


 createId(): string {
   let id = '';
   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   for ( var i = 0; i < 5; i++ ) {
       id += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   return id;
 }


 findIndexById(id:string)
 {
   let index = -1;
   for (let i = 0; i < this.user1.length; i++) {
       if (this.user1[i].id === id) {
           index = i;
           break;
       }
   }
   return index;
 }

 //Edit client information
   editUser(user:User){
   this.user={...user};
   // this.submitted=false;
   this.userDialogue=true;
   console.log(user);
   
 }


}