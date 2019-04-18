import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSpecialitiesService implements serviceNotifyInterface {

  notifty(data: any) {
    this.componente.notify(data);
  }

  constructor(private connection: ServerConnectionService) { }

  componente;

  execute(component){

    this.componente = component;

    console.log("Solicitando especialidades...");

    let httpHeaderss = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.connection.apiKey
    });

    let body = {}
    this.connection.post('/specialities',httpHeaderss,body,this);
  }
}
