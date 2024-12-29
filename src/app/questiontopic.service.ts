import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestiontopicService {
  public exam:string;
  public topic:string;
  public count:number;
  public score:number;
  public total:number;
  public difficulty:string;
  constructor() { 
    this.exam = " ";
    this.topic = " ";
    this.count=0;
    this.score=0;
    this.total=0;
    this.difficulty=" ";
  }
}
