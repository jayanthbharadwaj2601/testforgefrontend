import { Component } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { QuestiontopicService } from '../questiontopic.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuestionlistService } from '../questionlist.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  title = 'testapp';
  public a:Array<String>
  public question:string;
  public oa:string;
  public ob:string;
  public oc:string;
  public od:string;
  public ca:string;
  public prompt:string;
  public flag:boolean;
  public flag1:boolean;
  public flag2:boolean;
  public result:string;
  public result1:string;
  constructor(public user:UserService,public http:HttpClient,public exam:QuestiontopicService,public router:Router,public questions:QuestionlistService)
  {
    this.a = questions.Questions;
    this.oa=' ';
    this.ob=' ';
    this.oc=' ';
    this.od=' ';
    this.ca=' ';
    this.flag=false;
    this.flag1=false;
    this.question=' ';
    this.result=' ';
    this.result1=' ';
    this.flag2=false;
    this.prompt = "can you give me a simple"+this.exam.exam+" exam "+this.exam.topic+" of "+this.exam.difficulty+" difficulty.problem in json format?the json should have following attributes: Question , option_a,option_b,option_c,option_d,correct_option. Just provide the json as response,no need of other explanatio.Also make sure that you dont attach any markdown text with the response.I want the response in plain text format.also ensure that the question is not part of one of these questions:";
    for(let i=0;i<this.a.length;i++)
      {
        this.prompt += " "+this.a[i];
      }
    this.execute();
  }
go_back()
{
  this.router.navigateByUrl('/generate_test');
}
reveal_result(a:string)
{
  this.result='the correct option is '+this.ca;
  if(a==this.ca)
  {
    this.exam.score+=1
  }
  this.exam.count-=1
  this.flag1=true;
}
async execute(){
if(this.exam.count==0)
{
  this.result1='you scored '+String(this.exam.score)+'/'+String(this.exam.total)+' marks';
  this.flag2=true;
  this.flag=false;
  this.flag1=false;
  this.exam.score = 0;
  this.exam.total = 0;
}
else{
const genAI = new GoogleGenerativeAI("AIzaSyAtI4yLa-bZtGu5XRm6Tyxy9Jtphl8uNOE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const imageResp = await fetch(
  'https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg'
)
  .then((response) => response.arrayBuffer());

  
  
  
  const result = await model.generateContent(this.prompt);
  // console.log(result.response.text());
// console.log(result.response.text());
let res = result.response.text().slice(0,result.response.text().length-1);
let res123 = result.response.text();
console.log(result.response.text());
let res2 = " ";
let c1=0;
for(let i=0;i<res123.length;i++)
{
  if(res123[i]=="{")
    c1+=1;
  if(c1>0)
    res2+=res123[i];
  if(res123[i]=="}")
  {
    c1-=1;
    if(c1==0)
    break;
  }  
}
console.log("lol "+res2);
  let res1 = JSON.parse(res2);
  


this.a.push(res1.Question)
console.log(res1);
this.question=res1.Question;
this.oa=res1.option_a;
this.ob=res1.option_b;
this.oc=res1.option_c;
this.od=res1.option_d;
this.ca=res1.correct_option;
this.prompt+=" "+this.question;
this.flag=true;
this.flag1=false;
this.http.post("https://testforgebackend-production.up.railway.app/postquestion",{Question:this.question,username:this.user.username},{observe:"response"}).subscribe(body=>{
  console.log(body.body);
});
console.log(this.oa);
}
}

}
