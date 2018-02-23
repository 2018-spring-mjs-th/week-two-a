import { Component, ViewChild } from '@angular/core';
import { QuestionTypesComponent } from './question-types/question-types.component';
import { EShaPizzaToppingsComponent } from './e-sha-pizza-toppings/e-sha-pizza-toppings.component';

interface quizDisplay {
  name: string;
  showDelete: boolean;
  questionTypeSummary: string;
}

interface toppingDisplay {
  toppingName: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(QuestionTypesComponent)
  public questionTypeSubComponent: QuestionTypesComponent;
 
  @ViewChild(EShaPizzaToppingsComponent)
  public PizzaToppingsSubComponent: EShaPizzaToppingsComponent; 

  title = 'week-two-a';

  // quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  // ];

  ngOnInit() {

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

  quizzes: quizDisplay[] = [];

  public addFunnyQuiz() {
    //this.quizzes.push("Funny Quiz");
    this.quizzes.push({ 
      name: "Funny Quiz"
      , showDelete: false 
      , questionTypeSummary: ""
    });
  }

  newQuizName = "";

  public addQuiz() {
    let foo = this.questionTypeSubComponent.questionTypes
      .filter(x => x.checked)
      .map(x => x.name)
      .join(', ');

    this.quizzes.push({ name: this.newQuizName, showDelete: true, questionTypeSummary: foo });
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

  // Pizza Toppings

  chosenToppings: toppingDisplay[] = [];

  toppingName = "";

  public addPizzaTopping() {
    let y = this.PizzaToppingsSubComponent.toppings
      .filter(x => x.checked)
      .map(x=> x.name)
      .join(', ');

      this.chosenToppings.push({ toppingName: y })
  }
}
