import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from '../question-types.service';

interface quizType{
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-question-types',
  templateUrl: './question-types.component.html',
  styleUrls: ['./question-types.component.css']
})
export class QuestionTypesComponent implements OnInit {

  constructor(private qtService: QuestionTypesService) { }

  public questTypes: quizType[];

  ngOnInit() {
    this.questionTypes = this.qtService.getQuestionTypes()
      .map(x => ({ name: x, checked: false}));
  }

}
