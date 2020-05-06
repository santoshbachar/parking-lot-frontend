import { Component, OnInit } from '@angular/core';
import { ParkingInitComponent } from "./parking/parking-init/parking-init.component";

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parking-frontend';

  ngOnInit() : void{
    $(document).ready(function(){ $('ul.tabs').tabs(); });
  }
}
