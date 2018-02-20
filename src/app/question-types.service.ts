import { Injectable } from '@angular/core';

@Injectable()
export class QuestionTypesService {

  constructor() { }

  public getAvailableQuestionTypes() {
    return [
      "Multiple Choice"
      , "True/False"
      , "Short Answer"
    ];
  }
}
