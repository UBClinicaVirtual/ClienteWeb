import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
