import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialidad } from 'src/app/models/speciality.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(
    public http: HttpClient
  ) { }

  cargarEspecialidades(){

    /*
    let url = URL_SERVICIOS + '/hospital';
    return this.http.get(url)
        .map((resp:any) =>  {

          this.totalHospitales = resp.total;
          return resp.hospitales;
        });
*/
  }

  obtenerEspecialidad(id:string){
/*
    let url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(url)
        .map((resp:any) => resp.hospital );

*/
  }

  crearEspecialidad(nombre:string){
/*
    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this._usuarioService.token;

    return this.http.post(url, {nombre})
        .map((resp:any) => resp.hospital);
*/
  }

  buscarEspecialidad(termino:string){
    /*
    let url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/'+termino;
    return this.http.get(url)
           .map((resp:any) => resp.hospitales);
           */

  }

  actualizarEspecialidad(especiliadad: Especialidad){
    /*
    let url = URL_SERVICIOS+'/hospital/' + hospital._id;
    url += '?token=' +this._usuarioService.token;

    return this.http.put(url, hospital)
          .map((resp:any) => {
            swal('Hospital Actualizado', hospital.nombre, 'success');
            return  resp.hospital;
          });
*/
  }
  

}
