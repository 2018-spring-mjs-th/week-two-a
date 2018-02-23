import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from '../question-types.service';

@Component({
  selector: 'question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.css']
})
export class QuestionTypeComponent implements OnInit {
  public questionTypes: any[];

  constructor(private qtService: QuestionTypesService) {

  }


  ngOnInit() {
    this.questionTypes = this.qtService.getQuestionTypes()
      .map(x => ({name: x, checked: false}));
  }

}
