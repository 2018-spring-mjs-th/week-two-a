import { Injectable } from '@angular/core';

@Injectable()
export class QuestionTypesService {

  constructor() { }

<<<<<<< HEAD
  public getAvailableQuestionTypes() {
=======
  public getQuestionTypes() {
>>>>>>> master
    return [
      "Multiple Choice"
      , "True/False"
      , "Essay"
      , "Short Answer"
    ];
  }
}
