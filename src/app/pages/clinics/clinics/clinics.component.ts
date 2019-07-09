import { Component, OnInit } from '@angular/core';
import { Clinics } from 'src/app/models/clinic.model';
import { ClinicsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {

  cargando: boolean = true;
  clinics: Clinics [] = [];

  constructor(
    public _clinicService: ClinicsService
  ) { }

  ngOnInit() {
    this.cargarClinicas();
  }

  cargarClinicas(){
    this.cargando = true;

    this._clinicService.cargarClinicas()
        .subscribe((resp:any)=> {
          this.clinics = resp.clinics;
          this.cargando = false;
        })
  }

  buscarClinica(termino:string){
    if(termino.length <= 0){
      this.cargarClinicas();
      return;
    }
    if(termino.length <=2){
      return;
    }
    this.cargando=true;
    this._clinicService.buscarClinica(termino)
          .subscribe((resp:any)=> {
            this.clinics = resp.clinics;
            this.cargando = false;
          });
  }

}
