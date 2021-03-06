import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
      SettingsService,
      SidebarService,
      SharedService,
      UsuarioService,
      LoginGuardGuard,
      SpecialityService,
      ClinicsService,
      HcpService,
      PatientService
 } from "./service.index";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    SpecialityService,
    ClinicsService,
    HcpService,
    PatientService
  ]
})
export class ServiceModule { }
