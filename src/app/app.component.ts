import { Component, ViewChild } from '@angular/core';
import { QuestionTypesComponent } from './question-types/question-types.component';

interface quizDisplay{
  name: string;
  showDelete: boolean;
  questionType: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week-two-a';

  @ViewChild(QuestionTypesComponent) questionComponent: QuestionTypesComponent;

  // quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  // ];

  ngOnInit() {

    this.quizzes = [{
        name: "Quiz 1"
        , showDelete: false
        , questionType: ""
      }
      , {
        name: "Quiz 2"
        , showDelete: false
        , questionType: ""
      }
    ];
  }

  quizzes: quizDisplay[] = [];

  public addFunnyQuiz() {
    //this.quizzes.push("Funny Quiz");
    this.quizzes.push({ 
      name: "Funny Quiz", 
      showDelete: false, 
      questionType: ""
    });
  }

  newQuizName = "";

  public addQuiz() {
    let questionTypeString:string = this.questionComponent.questionTypes
      .filter(x => x.checked)
      .map(x => x.name)
      .join(", ");

    this.quizzes.push({ 
      name: this.newQuizName, 
      showDelete: true, 
      questionType: "(" + questionTypeString + ")"
    });
    this.newQuizName = "";
  }

  public deleteQuiz(quizToDelete) {
    this.quizzes = this.quizzes.filter((quiz) => quiz !== quizToDelete);
  }

  // Our #week-03 "calculator"...
  number1:number = 1;
  number2:number = 10;
  answer:number = 0;
  add = () => {
    window.alert('here');
    this.answer = Number(this.number1) + Number(this.number2)
  };
}
