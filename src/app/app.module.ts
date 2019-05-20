import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//componentes
import { AppComponent } from './app.component';
import { Login2Component } from './login2/login2.component';
import { RegisterComponent } from './register/register.component';

//Rutas
import {APP_ROUTES} from './app.routes';


// servicios

import { ServiceModule } from './services/service.module';


import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
