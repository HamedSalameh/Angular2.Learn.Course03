import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// containers
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

// services
import { PassengerDashboardService} from './passenger-dashboard/passenger-dashboard.service';

const routes: Route[] = [
  { path: '', component: HomeComponent, pathMatch : 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule(
  {
    declarations: [
      AppComponent,
      HomeComponent,
      NotFoundComponent
      ],
    imports: [
      // angular modules
      CommonModule,
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes),
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