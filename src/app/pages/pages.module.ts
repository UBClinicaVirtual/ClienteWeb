import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AppointmentsComponent } from '../components/appointments/appointments.component';
import { AppointmentComponent } from '../components/appointment/appointment.component';
import { AppointmentDetailComponent } from '../components/appointment-detail/appointment-detail.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';







@NgModule({
    declarations : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraficasComponent,
        IncrementadorComponent,
        GraficoDonaComponent,

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
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}

