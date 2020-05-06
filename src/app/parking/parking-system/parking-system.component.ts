import { Component, OnInit } from "@angular/core";
import { ParkingService } from "src/app/parking.service";

@Component({
  selector: "app-parking-system",
  templateUrl: "./parking-system.component.html",
  styleUrls: ["./parking-system.component.css"],
  providers: [ParkingService],
})
export class ParkingSystemComponent implements OnInit {
  isWorking: boolean = false;

  regNo: string = null;

  parking: any = null;
  msg: string = null;
  statusMsg: string = null;

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {}

  clickAddBike() {
    if (this.regNo === null || this.regNo.length <= 0) {
      window.alert("No vehicle is entertained without a registration plate/id");
      return;
    }
    this.regNo.trim();
    console.log("regNo" + this.regNo);
    this.isWorking = true;
    this.parkingService.addBike(this.regNo).subscribe(
      (response) => {
        // console.log(response);
        this.handleParking(response);
      },
      (error) => {
        console.log("error" + error);
        this.isWorking = false;
      }
    );
  }

  clickAddCar() {
    if (this.regNo === null || this.regNo.length <= 0) {
      window.alert("No vehicle is entertained without a registration plate/id");
      return;
    }
    this.regNo.trim();
    this.isWorking = true;
    this.parkingService.addCar(this.regNo).subscribe(
      (response) => {
        // console.log(response);
        this.handleParking(response);
      },
      (error) => {
        console.log("error" + error);
        this.isWorking = false;
      }
    );
  }

  clickAddBus() {
    if (this.regNo === null || this.regNo.length <= 0) {
      window.alert("No vehicle is entertained without a registration plate/id");
      return;
    }
    this.regNo.trim();
    this.isWorking = true;
    this.parkingService.addBus(this.regNo).subscribe(
      (response) => {
        // console.log(response);
        this.handleParking(response);
      },
      (error) => {
        console.log("error" + error);
        this.isWorking = false;
      }
    );
  }

  clickFindVehicle() {
    if (this.regNo === "") {
      window.alert("invalid reg no.");
      return;
    }

    this.isWorking = true;
    this.parkingService.findVehicle(this.regNo).subscribe(
      (response) => {
        let type = response.output.type;
        let regNo = response.output.registrationNo;
        let index = response.output.index;

        let row = response.row;
        let spot = response.spot;

        let emoji = "🏍";
        if (type === "car") {
          emoji = "🚗";
        } else if (type === "bus") {
          emoji = "🚌";
        }

        this.msg = `Vehicle type ${emoji} \n
        Found at level ${row} on ${spot}
        `;
      },
      (error) => {
        console.log("error" + error);
        this.msg = error;
      }
    );

    this.isWorking = false;
  }

  clickGetStatus() {
    this.isWorking = true;
    this.parkingService.getStatus().subscribe(
      (response) => {
        console.log(response);
        this.msg = `🏍 = ${response.bike} 🚗 = ${response.car} 🚌 = ${response.bus}` ;
      },
      (error) => {
        console.log(error);
        alert(error);
      }
    );
    this.isWorking = false;
  }

  handleParking(data: any) {
    if (data.status === true) {
      this.parking = data.output;
      this.msg = null;
      // this.msg = JSON.parse(JSON.stringify(data.output));
    } else {
      this.msg = data.msg;
    }
    this.isWorking = false;
  }
}
