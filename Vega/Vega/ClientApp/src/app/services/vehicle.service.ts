import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class vehicleService {

  constructor(private http:HttpClient) { }

  public getMakes(){
    return this.http.get("https://localhost:44386/api/Makes")  ;
}

  public getFeature(){
    return this.http.get("https://localhost:44386/api/features");
  }
}
