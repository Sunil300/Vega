import { vehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  make;
  models:any[];
  features;
  vehicle:any={}; 

  constructor(private vehicleService:vehicleService) { }


  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes =>
      this.make = makes);

      this.vehicleService.getFeature().subscribe(features=>
        this.features=features);
  }
  onMakeChange(){
    console.log("Vehicle",this.vehicle);
    var selectedMake=this.make.find(m=>m.id==this.vehicle.make);
    this.models=selectedMake ? selectedMake.models : [];
  }
}
