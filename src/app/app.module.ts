import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ParkingService } from "./parking.service";
import { ParkingInitComponent } from './parking/parking-init/parking-init.component';
import { ParkingSystemComponent } from './parking/parking-system/parking-system.component';

@NgModule({
  declarations: [AppComponent, ParkingInitComponent, ParkingSystemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
