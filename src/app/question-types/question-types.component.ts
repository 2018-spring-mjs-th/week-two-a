import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from '../question-types.service';

interface questionType {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'question-types',
  templateUrl: './question-types.component.html',
  styleUrls: ['./question-types.component.css']
})
export class QuestionTypesComponent implements OnInit {

  constructor(private qtSvc: QuestionTypesService) { }

  public questionTypes: questionType[];

  ngOnInit() {
    this.questionTypes = this.qtSvc.getQuestionTypes()
      .map(x => ({ name: x, checked: false }));
  }

}
