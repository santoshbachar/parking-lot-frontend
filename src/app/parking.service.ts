import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ParkingService {
  readonly URL_BASE = "https://parking-lot-system.herokuapp.com/";
  //readonly URL_BASE = "http://localhost:3000/";
  readonly URL_BIKE_ADD = this.URL_BASE + "add/bike";
  readonly URL_CAR_ADD = this.URL_BASE + "add/car";
  readonly URL_BUS_ADD = this.URL_BASE + "add/bus";
  readonly URL_PARKING_INIT = this.URL_BASE + "init";
  readonly URL_PARKING_FIND = this.URL_BASE + "find";
  readonly URL_PARKING_STATUS = this.URL_BASE + "status";
  

  constructor(private http: HttpClient) {}

  addBike(regId: string): Observable<any> {
    let newurl = this.URL_BIKE_ADD + "/" + regId;
    return this.http.get<any>(newurl);
  }

  addCar(regId: string): Observable<any> {
    let newurl = this.URL_CAR_ADD + "/" + regId;
    return this.http.get<any>(newurl);
  }

  addBus(regId: string): Observable<any> {
    let newurl = this.URL_BUS_ADD + "/" + regId;
    return this.http.get<any>(newurl);
  }

  findVehicle(regId: string): Observable<any> {
    let newurl = this.URL_PARKING_FIND + "/" + regId;
    return this.http.get<any>(newurl);
  }
  
  getStatus(): Observable<any> {
    return this.http.get<any>(this.URL_PARKING_STATUS);
  }

  initParking(
    rows: number,
    single: number,
    compact: number,
    large: number
  ): Observable<any> {
    return this.http.post<any>(this.URL_PARKING_INIT, {
      rows: rows,
      single: single,
      compact: compact,
      large: large,
    });
  }
}
