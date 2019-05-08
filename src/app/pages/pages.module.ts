import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AppointmentsComponent } from '../components/appointments/appointments.component';
import { AppointmentComponent } from '../components/appointment/appointment.component';
import { AppointmentDetailComponent } from '../components/appointment-detail/appointment-detail.component';







@NgModule({
    declarations : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraficasComponent,
        IncrementadorComponent,

        // provisorio
        AppointmentsComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        GraficasComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModule {}

