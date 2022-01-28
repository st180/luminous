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

    ngOnInit(): void {
      document.body.className = "today";
    }

//goals feature

goalMorning : string = "";
goalAfternoon : string = "";
goalEvening : string = "";

/***/

goalDataMorning: Array<Goal> = [
  {goal: 'Set goals for the morning'}
];

goalDataAfternoon: Array<Goal> = [
  {goal: 'Set goals for the afternoon'}
];

goalDataEvening: Array<Goal> = [
  {goal: 'Set goals for the evening'}
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
