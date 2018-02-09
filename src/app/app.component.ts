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

  quizzes = [
    {
      name: "Quiz 1"
      , showDelete: false
    }
    , {
      name: "Quiz 2"
      , showDelete: false
    }
  ];

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
}
