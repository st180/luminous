import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css']
})

export class PrioritiesComponent implements OnInit {

    constructor() {
      }

    ngOnInit(): void {
      document.body.className = "priorities";
    }

//goals feature

goalMorning : string = "";
goalAfternoon : string = "";
goalEvening : string = "";

/***/

goalDataMorning: Array<Goal> = [
  {goal: 'What are my priorities today?'}
];

goalDataAfternoon: Array<Goal> = [
  {goal: 'What are my priorities this week?'}
];

goalDataEvening: Array<Goal> = [
  {goal: 'What are my priorities this month?'}
];

/***/

handleGoalClickMorning() {
    this.addGoalMorning(this.goalMorning);
    this.goalMorning = '';
}

handleGoalClickAfternoon() {
    this.addGoalAfternoon(this.goalAfternoon);
    this.goalAfternoon = '';
}

handleGoalClickEvening() {
    this.addGoalEvening(this.goalEvening);
    this.goalEvening = '';
}

/***/

addGoalMorning(goalMorning: string): void {
  this.goalDataMorning.push({
    goal: goalMorning
  })
}

addGoalAfternoon(goalAfternoon: string): void {
  this.goalDataAfternoon.push({
    goal: goalAfternoon
  })
}

addGoalEvening(goalEvening: string): void {
  this.goalDataEvening.push({
    goal: goalEvening
  })
}
}
