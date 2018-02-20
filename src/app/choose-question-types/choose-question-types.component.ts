import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from '../question-types.service';

@Component({
  selector: 'choose-question-types',
  templateUrl: './choose-question-types.component.html',
  styleUrls: ['./choose-question-types.component.css']
})
export class ChooseQuestionTypesComponent implements OnInit {

  constructor(private questionTypesService: QuestionTypesService) { }

  public availableQuestionTypes;

  ngOnInit() {
    this.availableQuestionTypes = this.questionTypesService.getAvailableQuestionTypes()
      .map(x => ({ name: x, checked: false }));
  }

}
