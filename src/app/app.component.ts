import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week-two-a';

  // quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  // ];

  ngOnInit() {
    this.quizzes = [{
      name: "Quiz 1"
      , showDelete: false
    }
    , {
      name: "Quiz 3"
      , showDelete: false
    }

  ]
  };

  quizzes = [];

  public addFunnyQuiz() {
    //this.quizzes.push("Funny Quiz");
    this.quizzes.push({ name: "Funny Quiz", showDelete: false });
  }

  newQuizName = "";

  public addQuiz() {
    this.quizzes.push({ name: this.newQuizName, showDelete: true });
    this.newQuizName = "";
  }

  public deleteQuiz(quizToDelete) {
    this.quizzes = this.quizzes.filter((quiz) => quiz !== quizToDelete);
  }

  // Our #week-03 "calculator"...
  number1:number = 0;
  number2:number = 0;
  answer:number = 0;
  add = () => {
    window.alert('here');
    this.answer = Number(this.number1) + Number(this.number2)
  };
}
