import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TodayComponent } from './today/today.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
  { path: "today", component: TodayComponent },
  { path: "priorities", component: PrioritiesComponent },
  { path: "plans", component: PlansComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "today", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
