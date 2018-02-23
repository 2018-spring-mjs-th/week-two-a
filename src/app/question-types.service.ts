import { Injectable } from '@angular/core';

@Injectable()
export class QuestionTypesService {

  constructor() { }

  public getQuestionTypes() {
    return [
      "Multiple Choice",
      "True/False"
    ];
  }
}
