
import {RouterModule, Routes} from '@angular/router';

import {WelcomeComponent} from './components/welcome/welcome.component';
import {ProtectedComponent} from './components/protected/protected.component';

import {AuthGuardService} from './services/auth-guard.service';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentSearchComponent} from './components/appointment-search/appointment-search.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: WelcomeComponent},
  { path: 'turns', component: AppointmentsComponent },
  { path: 'protected', component: ProtectedComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
  { path: 'buscar-turno', component: AppointmentSearchComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
