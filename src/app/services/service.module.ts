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
      HcpService
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
    HcpService
  ]
})
export class ServiceModule { }
