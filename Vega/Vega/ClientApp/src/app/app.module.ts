
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { vehicleService } from './services/vehicle.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    VehicleFormComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavMenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'home', pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {path:'Vehicle/New',component:VehicleFormComponent},
      {path:'Register/New',component:RegisterComponent}
    ])
  ],
  providers: [vehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
