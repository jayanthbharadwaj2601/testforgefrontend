import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { QuestionlistService } from '../questionlist.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public resp:any;
  constructor(public user:UserService,public http:HttpClient,public router:Router,public questions:QuestionlistService )
  {

  }
  login(username:String,password:String)
  {
    this.http.post("https://testforgebackend-production.up.railway.app/login",{username:username,password:password},{observe:"response"}).subscribe(body=>{
      this.resp = body.body
      if(this.resp.username!=null)
      {this.user.username=this.resp.username;
      this.user.password=this.resp.password;}
      else
      {
        this.user.username=" ";
      this.user.password=" ";
      }
      console.log(this.resp)
    });
  }
  login1()
  {
    if(this.user.username!=' ' && this.user.password!=' ')
    {
      this.http.post("https://testforgebackend-production.up.railway.app/getquestions",{username:this.user.username,password:this.user.password},{observe:"response"}).subscribe(body=>{
        this.questions.Questions = body.body
      });
      this.router.navigateByUrl('generate_test');
    }
  }
}
