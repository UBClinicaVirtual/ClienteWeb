
import {RouterModule, Routes} from '@angular/router';

import {WelcomeComponent} from './components/welcome/welcome.component';
import {ProtectedComponent} from './components/protected/protected.component';

import  {AuthGuardService} from "./services/auth-guard.service";
import { AppointmentsComponent } from './components/appointments/appointments.component';

//import {AuthGuardService} from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
  { path: 'home', component:WelcomeComponent  , canActivate:[AuthGuardService]},
  { path: 'turns', component:AppointmentsComponent  , canActivate:[AuthGuardService]},
  { path: 'protected', component: ProtectedComponent , canActivate:[AuthGuardService]},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
