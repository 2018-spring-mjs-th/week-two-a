import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from '../question-types.service';

@Component({
  selector: 'question-types',
  templateUrl: './question-types.component.html',
  styleUrls: ['./question-types.component.css']
})
export class QuestionTypesComponent implements OnInit {

  constructor(private qtService: QuestionTypesService) { }

  public questionTypes: string[];


  ngOnInit() {
    this.questionTypes = this.qtService.getQuestionTypes();
  }

}
