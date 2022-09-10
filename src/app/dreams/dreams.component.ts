import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {

      constructor() {
        }

        goalMorning = '';
        goalAfternoon = '';
        goalEvening = '';

        loadMorning: string | null = localStorage.getItem('goalMorning');
        loadAfternoon: string | null  = localStorage.getItem('goalAfternoon');
        loadEvening: string | null  = localStorage.getItem('goalAfternoon');


      ngOnInit(): void {
        document.body.className = "dreams";
      }
  //goals feature

  /***/

  goalDataMorning: Array<Goal> = [
    {goal: 'Things I want to buy or own'}
  ];

  goalDataAfternoon: Array<Goal> = [
    {goal: 'Cities where I want to travel to'}
  ];

  goalDataEvening: Array<Goal> = [
    {goal: 'Experiences I want to have'}
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
    localStorage.setItem('goalMorning', this.goalMorning);
  }

  addGoalAfternoon(goalAfternoon: string): void {
    this.goalDataAfternoon.push({
      goal: goalAfternoon
    })
    localStorage.setItem('goalAfternoon', this.goalAfternoon);
  }

  addGoalEvening(goalEvening: string): void {
    this.goalDataEvening.push({
      goal: goalEvening
    })
    localStorage.setItem('goalEvening', this.goalEvening);
  }
  }
