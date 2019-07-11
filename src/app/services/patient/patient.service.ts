import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerConfigService } from 'src/app/config/server-config.service';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    public http: HttpClient,
    private config: ServerConfigService
  ) { }

  createPatient(body){
      let httpHeaders = new HttpHeaders({
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
      });

      
      let url = this.config.url()+'/user/patient';

      return this.http.post(url,body,{headers: httpHeaders})
            .map((resp:any)=> {
              swal('Usuario creado!', 'Medico creado', 'success');
              return resp;
            })
  }
}

