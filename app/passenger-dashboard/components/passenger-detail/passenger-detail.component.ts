import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core'

import { Passenger } from '../../models/passenger.interface';

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
            <button (click)="toggleEdit()">
            {{ editing? 'Done' : 'Edit' }}
            </button>
          </div>
          <div>
            <button (click)="onRemove()">
            Remove
            </button>
          <div>
            <button (click)="goToPassenger()">
            View
            </button>
          </div>
    </div>
    `
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  constructor() { }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  ngOnChanges(changes) {
    // break the bond between the parent component and the child component objects
    this.detail = Object.assign({}, changes.detail.currentValue);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  goToPassenger(){
    this.view.emit(this.detail);
  }
}