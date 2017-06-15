import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template:
    `
    <form #form="ngForm" novalidate>
     {{ detail | json }}
     <div>
        Passenger name: 
            <input
                type="text"
                name="fullname"
                [ngModel]="detail?.fullname"
                #fullname="ngModel" 
                required />
                <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                    Full name is required
                </div>
    </div>

    <div>
        Passenger ID: 
            <input
                type="text"
                name="id"
                required
                #id="ngModel"
                [ngModel]="detail?.id"
                >
                <div *ngIf="id.errors?.required && id.touched" class="error">
                    ID is required
                </div>
    </div>

    <div>
        <label>
            <input
                type="checkbox"    
                name="checkedIn"
                [ngModel]="detail?.checkedIn"
                (ngModelChange)="toggleCheckIn($event)"
                >
        </label>
    </div>

    <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
            type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate"
        >
    </div>

    <div>
        Luggage:
            <select 
            name="baggage"
            [ngModel]="detail?.baggage"
            >
                <option
                    *ngFor="let item of baggage"
                    [value]="item.key"
                    [selected]="item.key === detail?.baggage"
                >
                {{ item.value }}
                </option>
            </select>
            
    </div>

    <div>{{ form.value | json }}</div>
    <div>Valid: {{ form.valid }}</div>
    </form>
    `
})
export class PassengerFormComponent{
    @Input()
    detail: Passenger;

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No Baggage'
    },
    {
        key: 'hand-only',
        value: 'Hand baggage'
    },
    {
        key: 'hold-only',
        value: 'Hold baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }
    ];

    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn){
            this.detail.checkInDate = +new Date();
        }
    }
}