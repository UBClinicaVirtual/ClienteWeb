import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//volar
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//componentes
import { AppComponent } from './app.component';
import { Login2Component } from './login2/login2.component';
import { RegisterComponent } from './login2/register.component';

//Rutas
import {APP_ROUTES} from './app.routes';


import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtectedComponent } from './components/protected/protected.component';
import {FormsModule} from '@angular/forms'

// services

import { SettingsService } from './services/settings.service';

import { HttpClientModule } from '@angular/common/http';
import {GoogleSignInComponent} from 'angular-google-signin';
import { AppointmentSearchComponent } from './components/appointment-search/appointment-search.component';
import { LoadingComponent } from './components/loading/loading.component';

import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
 //   AppointmentsComponent,
  //  AppointmentComponent,
   // AppointmentDetailComponent,
   // NavbarComponent,
   // ProtectedComponent,
    Login2Component,
   // GoogleSignInComponent,
   // AppointmentSearchComponent,
    RegisterComponent
   // LoadingComponent,
  
  ],
  imports: [
    BrowserModule,
  //  SweetAlert2Module.forRoot(),
  //  NgbModule,
  //  HttpClientModule,
    APP_ROUTES,
  //  FormsModule,
    PagesModule
  ],
  providers: [SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
