import { Component, OnInit, Input } from "@angular/core";
import { ParkingService } from "../../parking.service";

@Component({
  selector: "app-parking-init",
  templateUrl: "./parking-init.component.html",
  styleUrls: ["./parking-init.component.css"],
})
export class ParkingInitComponent implements OnInit {
  /*
  @Input("rows") rows: number = 1;
  @Input("single") single: number = 1;
  @Input("compact") compact: number = 1;
  @Input("large") large: number = 1;
  @Input("isWorking") isWorking: boolean = false;
  */

  isWorking: boolean = false;

  // parking: any = null;
  msg: string = null;

  rows: number = 2;
  single: number = 2;
  compact: number = 3;
  large: number = 6;

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {}

  clickInitParking() {
    this.isWorking = true;
    this.parkingService
      .initParking(this.rows, this.single, this.compact, this.large)
      .subscribe(
        (response) => {
          this.msg = response;
        },
        (error) => {
          console.log(error);
          this.msg = error;
        }
      );
    this.isWorking = false;
  }
}
