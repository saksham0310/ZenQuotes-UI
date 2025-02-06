import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RandomQuotesComponent } from './components/random-quotes/random-quotes.component';
import { DisplayAppComponent } from './components/display-app/display-app.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RandomQuotesComponent,
    DisplayAppComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
