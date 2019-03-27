import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import {APP_ROUTING} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentDetailComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    NgbModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
