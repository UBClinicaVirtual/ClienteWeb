import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Especialidad } from 'src/app/models/speciality.model';
import { ServerConfigService } from 'src/app/config/server-config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(
    public http: HttpClient,private config: ServerConfigService
  ) { }

  cargarEspecialidades(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });

    let url = this.config.url() + '/specialities';
    /*
    return this.http.post(url,{},{headers: httpHeaders})
          .map((resp:any) => {
              return resp.specialities;
          });
          */
         return this.http.post(url,{},{headers: httpHeaders});


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
