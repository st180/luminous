import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit {

    constructor() {
      }

      goalMorning = '';
      goalAfternoon = '';
      goalEvening = '';

    ngOnInit(): void {
      document.body.className = "today";
    }
//goals feature

/***/

goalDataMorning: Array<Goal> = [
  {goal: 'Write down my goals this morning'}
];

goalDataAfternoon: Array<Goal> = [
  {goal: 'Stay on track throughout the day'}
];

goalDataEvening: Array<Goal> = [
  {goal: 'Reflect in the evening'}
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
