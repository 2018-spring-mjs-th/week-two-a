import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from '../question-types.service';

interface quizType {
  name: string,
  checked: boolean
}

@Component({
  selector: 'question-types',
  templateUrl: './question-types.component.html',
  styleUrls: ['./question-types.component.css']
})
export class QuestionTypesComponent implements OnInit {


  constructor(private qtService: QuestionTypesService) { };
  

  public questionTypes: quizType[];

  ngOnInit() {
    this.questionTypes = this.qtService.getAvailableQuestionTypes()
    .map(x =>({name: x, checked:false}))
  }

}
