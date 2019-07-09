import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/speciality.model';
import { SpecialityService } from 'src/app/services/service.index';

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
    /*
    if(termino.length <=0 ){
      this.cargarHospitales();
      return;
    }
    this._hospitalService.buscarHospital(termino)
            .subscribe(hospitales => this.hospitales = hospitales );
            */
  }

  cargarEspecialidades(){
    this.cargando = true;

    this._specialityService.cargarEspecialidades()
      // .subscribe(specialities => this.specialities = specialities);
      .subscribe((resp:any) => {
        console.log(resp);
        this.specialities = resp.specialities;
        this.cargando = false;
      });
       //this.cargando=false
             
        };
        
    /*
    this._hospitalService.cargarHospitales()
    .subscribe(hospitales => this.hospitales=hospitales);
    console.log(this.hospitales);
    */
  


  guardarEspecialidad(speciality: Especialidad){
    /*
    this._hospitalService.actualizarHospital(hospital)
    .subscribe();
    */

  }

  crearEspecialidad(){
    /*
    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true,
    }).then((valor: string) => {
      if(!valor || valor.length ===0){
        return;
      }

      this._hospitalService.crearHospital(valor)
            .subscribe(()=>this.cargarHospitales());
    })

    */
  }


}
