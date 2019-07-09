import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Especialidad } from 'src/app/models/speciality.model';
import { ServerConfigService } from 'src/app/config/server-config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import swal from 'sweetalert';


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
    let body = {
      
    }

    let url = this.config.url() + '/specialities';
  
         return this.http.post(url,body,{headers: httpHeaders});
  }

  buscarEspecialidad(termino:string){
    
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });
    let body = {
      "name": termino
    }

    let url = this.config.url() + '/specialities';
    return this.http.post(url,body,{headers: httpHeaders});
 
  }
  actualizarEspecialidad(especialidad: Especialidad){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });
    let body = {
      "name": especialidad.name
    }
   
    let url = this.config.url() + '/speciality/'+ especialidad.id;
    return this.http.post(url,body,{headers: httpHeaders})
          .map((resp:any)=>{
            swal('Especialidad Actualizada', especialidad.name,'success');
            return resp;
          })
 
  }
  crearEspecialidad(nombre:string){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });
    let body = {
      "name": nombre
    }
    let url = this.config.url() + '/speciality';
    return this.http.post(url,body,{headers: httpHeaders})
              .map((resp:any)=>{
                swal('Especialidad Creada', nombre,'success');
                return resp
              } );

    
    /*
        let url = URL_SERVICIOS + '/hospital';
        url += '?token=' + this._usuarioService.token;
    
        return this.http.post(url, {nombre})
            .map((resp:any) => resp.hospital);
    */
      }


  obtenerEspecialidad(id:string){
/*
    let url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(url)
        .map((resp:any) => resp.hospital );

*/
  }
  

}
