import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { arrayBuffer, buffer } from 'stream/consumers';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'testapp';
  public a:Array<String>
  constructor()
  {
    this.a = [];
  }
async execute(){
const genAI = new GoogleGenerativeAI("AIzaSyAtI4yLa-bZtGu5XRm6Tyxy9Jtphl8uNOE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const imageResp = await fetch(
  'https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg'
)
  .then((response) => response.arrayBuffer());

  let prompt = "can you give me a simple gate exam problem in json format?the json should have following attributes: Question , option a,option b,option c,option d,correct option. Just provide the json as response,no need of other explanatio.Also make sure that you dont attach any markdown text with the response.I want the response in plain text format.also ensure that the question is not part of one of these questions:";
  for(let i=0;i<this.a.length;i++)
  {
    prompt += " "+this.a[i];
  }
  
  const result = await model.generateContent(prompt);
  // console.log(result.response.text());
// console.log(result.response.text());
let res = result.response.text().slice(0,result.response.text().length-1);
let res1 = JSON.parse(res);
this.a.push(res1.Question)
console.log(res1.Question);
}
}
