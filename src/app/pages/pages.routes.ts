import {RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { AppointmentsComponent } from '../components/appointments/appointments.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AppointmentSearchComponent } from '../components/appointment-search/appointment-search.component'



const pagesRoutes: Routes = [
    {
        path:'', 
        component: PagesComponent, 
        children:[
            {path: 'dashboard', component:DashboardComponent},
            {path: 'progress', component:ProgressComponent},
            {path: 'graficas1', component:GraficasComponent},
            {path: 'turnos', component:AppointmentsComponent},
            {path: 'search-turn', component:AppointmentSearchComponent},
            {path: 'account-settings', component:AccountSettingsComponent},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]}

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);