import { Component, OnInit } from '@angular/core';
import { Hcps } from 'src/app/models/hcp.model';
import { HcpService, ClinicsService, SpecialityService } from 'src/app/services/service.index';
import { Clinics } from 'src/app/models/clinic.model';
import { Especialidad } from 'src/app/models/speciality.model';

@Component({
  selector: 'app-hcp',
  templateUrl: './hcp.component.html',
  styleUrls: ['./hcp.component.css']
})
export class HcpComponent implements OnInit {

  clinics: Clinics [] = [];
  specialities: Especialidad[] = [];
  cargando: boolean = true;
  hcps: Hcps[] = [];

  constructor(
    public _hcpService : HcpService,
    public _clinicService: ClinicsService,
    public _specialityService: SpecialityService
  ) { }

  ngOnInit() {
    this.cargarClinicas();
    this.cargarEspecialidades();
    this.cargarHcps();
  }

  cargarClinicas(){
   

    this._clinicService.cargarClinicas()
        .subscribe((resp:any)=> {
          this.clinics = resp.clinics;
          
        })
  }
  cargarEspecialidades(){
   

    this._specialityService.cargarEspecialidades()
      .subscribe((resp:any) => {
        this.specialities = resp.specialities;
        
      });    
        };

  cargarHcps(){
    this.cargando = true;

    this._hcpService.cargarHcp()
        .subscribe((resp:any) => {
          this.hcps = resp.hcps;
          this.cargando = false;
        })
  }
  cambioEspecialidad(id:string){
    
    if(id === ""){
      this.cargarHcps();
      return;
    }
    this.cargando = true;

    this._hcpService.buscarHcp(id)
        .subscribe((resp:any) => {
          this.hcps = resp.hcps;
          this.cargando = false;
        })
  }



}
