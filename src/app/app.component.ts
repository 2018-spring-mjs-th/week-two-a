import { Component, ViewChild } from '@angular/core';
import { QuestionTypesComponent } from './question-types/question-types.component';

interface quizDisplay {
<<<<<<< HEAD
  name: string,
  showDelete: boolean,
  questionTypeSummary: string
=======
  name: string;
  showDelete: boolean;
  questionTypeSummary: string;
>>>>>>> master
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  
  @ViewChild(QuestionTypesComponent)

  public questionTypeSubComponent: QuestionTypesComponent
=======

  @ViewChild(QuestionTypesComponent)
  public questionTypeSubComponent: QuestionTypesComponent;
>>>>>>> master

  title = 'week-two-a';

  // quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  // ];

  ngOnInit() {
<<<<<<< HEAD
    this.quizzes = [{
      name: "Quiz 1"
      , showDelete: false
      , questionTypeSummary: 'foo'
    }
    , {
      name: "Quiz 3"
      , showDelete: false
      , questionTypeSummary: 'foo'
    }

  ]
  };
=======

    this.quizzes = [{
        name: "Quiz 1"
        , showDelete: false
        , questionTypeSummary: ""
      }
      , {
        name: "Quiz 3"
        , showDelete: false
        , questionTypeSummary: ""
      }
    ];
  }
>>>>>>> master

  quizzes: quizDisplay[] = [];

  public addFunnyQuiz() {
    //this.quizzes.push("Funny Quiz");
<<<<<<< HEAD
    this.quizzes.push({ name: "Funny Quiz", showDelete: false, questionTypeSummary: 'foo' });
=======
    this.quizzes.push({ 
      name: "Funny Quiz"
      , showDelete: false 
      , questionTypeSummary: ""
    });
>>>>>>> master
  }

  newQuizName = "";

  public addQuiz() {
<<<<<<< HEAD

    let foo = this.questionTypeSubComponent.questionTypes
=======
    let summary = this.questionTypeSubComponent.questionTypes
>>>>>>> master
      .filter(x => x.checked)
      .map(x => x.name)
      .join(', ');

<<<<<<< HEAD
    this.quizzes.push({ name: this.newQuizName, showDelete: true, questionTypeSummary: 'foo' });
=======
    this.quizzes.push({ name: this.newQuizName, showDelete: true, questionTypeSummary: summary });
>>>>>>> master
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
