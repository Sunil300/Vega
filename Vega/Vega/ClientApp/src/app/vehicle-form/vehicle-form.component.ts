import { MakeService } from './../services/make.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes;
  vehicle={};
  constructor(private makeService:MakeService) { }

  ngOnInit(): void {
    this.makeService.getMakes().subscribe(makes=>{
      this.makes=makes
      console.log("MAKES",this.makes);
    });
  }
  onMakeChange(){
    console.log("Vehicle",this.vehicle);
  }

}
