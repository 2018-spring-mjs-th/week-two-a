import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from '../question-types.service';

interface quizType {
<<<<<<< HEAD
  name: string,
  checked: boolean
=======
  name: string;
  checked: boolean;
>>>>>>> master
}

@Component({
  selector: 'question-types',
  templateUrl: './question-types.component.html',
  styleUrls: ['./question-types.component.css']
})
export class QuestionTypesComponent implements OnInit {

<<<<<<< HEAD

  constructor(private qtService: QuestionTypesService) { };
  
=======
  constructor(private qtSvc: QuestionTypesService) { }
>>>>>>> master

  public questionTypes: quizType[];

  ngOnInit() {
<<<<<<< HEAD
    this.questionTypes = this.qtService.getAvailableQuestionTypes()
    .map(x =>({name: x, checked:false}))
=======
    this.questionTypes = this.qtSvc.getQuestionTypes()
      .map(x => ({ name: x, checked: false }));
>>>>>>> master
  }

}
