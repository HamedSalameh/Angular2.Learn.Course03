import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

// containers
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

// services
import { PassengerDashboardService} from './passenger-dashboard/passenger-dashboard.service';


@NgModule(
  {
    declarations: [
      AppComponent
      ],
    imports: [
      // angular modules
      CommonModule,
      BrowserModule,
      FormsModule,
      // custom modules
      PassengerDashboardModule
    ],
    bootstrap: [
      AppComponent
      ],
    providers: [
      PassengerDashboardService
    ]
  }
)
export class AppModule {
}