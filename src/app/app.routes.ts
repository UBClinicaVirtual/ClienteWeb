import { RouterModule, Routes } from "@angular/router";


import { Login2Component } from './login2/login2.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login2/register.component';




const appRoutes: Routes = [
    {path: 'login2', component:Login2Component},
    {path: 'register', component:RegisterComponent},
    {path: '**', component:NopagefoundComponent},
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});