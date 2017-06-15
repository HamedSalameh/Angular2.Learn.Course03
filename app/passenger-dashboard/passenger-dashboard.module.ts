import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashbaord/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
    bootstrap: [],
    declarations: 
    [
        // containers
        PassengerDashboardComponent,
        PassengerViewerComponent,

        // components
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        PassengerViewerComponent
    ]
})
export class PassengerDashboardModule {}