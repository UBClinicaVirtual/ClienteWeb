import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerConfigService } from 'src/app/config/server-config.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  constructor(
    public http: HttpClient,
    private config: ServerConfigService
  ) { }

  cargarClinicas(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });
    let body = {
      
    }

    let url = this.config.url() + '/clinic/search';

    return this.http.post(url,body,{headers: httpHeaders});

  }

  buscarClinica(termino:string){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });
    let body = {
      "name": termino
    }
    let url = this.config.url() + '/clinic/search';
    return this.http.post(url,body,{headers: httpHeaders});

  }
}
