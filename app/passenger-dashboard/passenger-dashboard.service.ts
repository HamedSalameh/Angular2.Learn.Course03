import { Passenger } from './models/passenger.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const PASSENGER_API = "/api/passengers";

@Injectable()
export class PassengerDashboardService {

    constructor(private _http: Http ){}

    getPassengers() : Observable<Passenger[]> {
        return this._http
        .get(PASSENGER_API)
        .map((response: Response) => {
            return response.json();
        })
        ;
    }

    updatePassenger( passenger: Passenger) : Observable<Passenger>{
        let headers  = new Headers(
            {
                'Content-type':'application/json'
            }
        );
        let requestOptions  = new RequestOptions({
            headers : headers
        });


        return this._http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger, requestOptions)
        .map((response: Response) => {
            return response.json();
        })
    }

    removePassenger( passenger: Passenger) : Observable<Passenger>{
        return this._http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        .map((response: Response) => {
            return response.json();
        })
    }

}