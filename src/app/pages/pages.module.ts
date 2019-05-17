import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AppointmentsComponent } from '../components/appointments/appointments.component';
import { AppointmentComponent } from '../components/appointment/appointment.component';
import { AppointmentDetailComponent } from '../components/appointment-detail/appointment-detail.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AppointmentSearchComponent } from '../components/appointment-search/appointment-search.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from '../components/login/login.component';



import { PAGES_ROUTES } from './pages.routes';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProtectedComponent } from '../components/protected/protected.component';

import {GoogleSignInComponent} from 'angular-google-signin';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
    declarations : [
        LoginComponent,
        GoogleSignInComponent,
        ProtectedComponent,
        NavbarComponent,
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraficasComponent,
        IncrementadorComponent,
        GraficoDonaComponent,

        // provisorio
        AppointmentsComponent,
        AppointmentSearchComponent,
        AccountSettingsComponent,
        AppointmentComponent,
        LoadingComponent,
        AppointmentDetailComponent,
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        GraficasComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        BrowserModule,
        SweetAlert2Module.forRoot(),
        NgbModule,
        HttpClientModule
    ]
})

export class PagesModule {}

