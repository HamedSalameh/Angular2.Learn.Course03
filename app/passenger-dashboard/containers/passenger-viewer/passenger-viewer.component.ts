import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import 'rxjs/add/operator/switchmap';

import { Passenger} from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template:
    `
    <div>
        <passenger-form
        [detail]="passenger"
        (update)="OnUpdatePassenger($event)"
        >
        </passenger-form>
    </div>
    `
})
export class PassengerViewerComponent implements OnInit{
    passenger: Passenger;
    constructor(private _service: PassengerDashboardService, private _router: Router, private _route: ActivatedRoute){

    }

    ngOnInit() {
        this._route.params
            .switchMap((data: Passenger) => this._service.getPassenger(data.id))
            .subscribe( (data: Passenger) => { this.passenger = data; console.log(data);} )
    }

    OnUpdatePassenger(event: Passenger){
        this._service.updatePassenger(event)
            .subscribe( (data: Passenger) => {
              this.passenger = Object.assign({}, this.passenger, data);
            })
    }

}
