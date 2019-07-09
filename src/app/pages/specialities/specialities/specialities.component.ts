import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/speciality.model';
import { SpecialityService } from 'src/app/services/service.index';

declare var swal: any;
@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {

  specialities: Especialidad[] = [];
  cargando: boolean = true;

  constructor(
    public _specialityService: SpecialityService
  ) { }

  ngOnInit() {
    this.cargarEspecialidades();
  }

  buscarEspecialidad(termino:string){
    if(termino.length <= 0){
      this.cargarEspecialidades();
      return;
    }
    if(termino.length <=2){
      return;
    }
    this.cargando = true;
    this._specialityService.buscarEspecialidad(termino)
          .subscribe((resp:any) => {
            this.specialities = resp.specialities;
            this.cargando = false;
          });
  }

  cargarEspecialidades(){
    this.cargando = true;

    this._specialityService.cargarEspecialidades()
      .subscribe((resp:any) => {
        this.specialities = resp.specialities;
        this.cargando = false;
      });    
        };
         


  guardarEspecialidad(speciality: Especialidad){
    this._specialityService.actualizarEspecialidad(speciality)
          .subscribe();
  }

  crearEspecialidad(){
    
    swal({
      title: 'Crear especialidad',
      text: 'Ingrese el nombre de la especialidad',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true,
    }).then((valor: string) => {
      if(!valor || valor.length ===0){
        return;
      }

      this._specialityService.crearEspecialidad(valor)
            .subscribe(()=>this.cargarEspecialidades());
    })

    
  }


}
