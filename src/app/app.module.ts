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
import { ProtectedComponent } from './components/protected/protected.component';
import {APP_ROUTING} from './app.routes';
import {FormsModule} from '@angular/forms'

// services
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {GoogleSignInComponent} from 'angular-google-signin';
import { AppointmentSearchComponent } from './components/appointment-search/appointment-search.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentDetailComponent,
    NavbarComponent,
    ProtectedComponent,
    LoginComponent,
    GoogleSignInComponent,
    AppointmentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    NgbModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
