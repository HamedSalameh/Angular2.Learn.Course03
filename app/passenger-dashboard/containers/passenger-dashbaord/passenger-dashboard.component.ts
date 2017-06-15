import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template:
    `
    <div>
      <passenger-count
        [items]="passengers"
      >
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>       
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private _passengerService: PassengerDashboardService) { }

    ngOnInit() {
        this._passengerService.getPassengers()
            .subscribe((data: Passenger[]) => {
                this.passengers = data;  
            }, err => console.log(err));
    }

    handleEdit(event: Passenger) {
        this._passengerService.updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
                    return passenger;
                });
            })
    }

    handleRemove(event: Passenger) {
        this._passengerService.removePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id;
                });

            });
    }
}