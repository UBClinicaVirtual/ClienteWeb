import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ServerConfigService } from 'src/app/config/server-config.service';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class HcpService {

  constructor(
    public http: HttpClient,
    private config: ServerConfigService
  ) { }

  createHcp(body){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });

    let url = this.config.url()+'/user/hcp';

    return this.http.post(url,body,{headers: httpHeaders})
          .map((resp:any)=> {
            swal('Usuario creado!', 'Medico creado', 'success');
            return resp;
          })
  }

  actualizarHcp(body){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });

    let url = this.config.url()+'/user/hcp';

    return this.http.post(url,body,{headers: httpHeaders})
          .map((resp:any)=> {
            swal('Usuario Actualizado!', 'Medico actualizado', 'success');
            return resp;
          })
  }
  cargarHcp(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });
    let pepe = "";
    let body = {
      
    }

    let url = this.config.url() + '/hcp/search';

    return this.http.post(url,body,{headers: httpHeaders});
  }

  buscarHcp(id:string){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });
    
    let body = {
      "speciality_id": id
    }

    let url = this.config.url() + '/hcp/search';

    return this.http.post(url,body,{headers: httpHeaders});
  }
}
