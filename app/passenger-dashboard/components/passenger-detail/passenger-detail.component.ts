import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Passenger} from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template:
    `
    <div>
        <span class="status" [class.checked-in]="detail.checkedIn"></span>
          <div *ngIf="editing">
            <input type="text" 
            (input)="onNameChange(name.value)"
            [value]="detail.fullname"
            #name>
          </div>
          <div *ngIf="!editing">
            {{ detail.fullname }}
          </div>
          <div class="date">
            Check in date: 
            {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div>
            Children: {{ detail.children?.length || 0}}
          </div>
          <div>
            <button (click)="toggleEdit()">
            {{ editing? 'Done' : 'Edit' }}
            </button>
          </div>
          <div>
            <button (click)="onRemove()">
            Remove
            </button>
          </div>
    </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();
    
    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor(){}

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }

    toggleEdit(){
        if (this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
}