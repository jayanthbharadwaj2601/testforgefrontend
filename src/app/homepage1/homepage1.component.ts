import { Component } from '@angular/core';
import { QuestiontopicService } from '../questiontopic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage1',
  standalone: true,
  imports: [],
  templateUrl: './homepage1.component.html',
  styleUrl: './homepage1.component.css'
})
export class Homepage1Component {
  constructor(public exam:QuestiontopicService,public router:Router)
  {

  }
  generate_test(exam:string,topic:string,count:string,difficulty:string)
  {
    this.exam.exam=exam;
    this.exam.topic=topic;
    this.exam.count=Number(count);
    this.exam.difficulty=difficulty;
    this.exam.total = this.exam.count;
    this.router.navigateByUrl('/test');
  }
}
