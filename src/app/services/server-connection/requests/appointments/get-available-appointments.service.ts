import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAvailableAppointmentsService implements serviceNotifyInterface {
  constructor(private connection: ServerConnectionService) { }

  notifty(data: any) {
    this.componente.response(data);
  }


  componente: componentResponseInterface;

  execute(component:componentResponseInterface){

    this.componente = component;

    console.log("service: get-appointments");

    let httpHeaderss = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.connection.apiKey
    });

    let body = this.componente.getBody();

    this.connection.post('/appointment/available',httpHeaderss,body,this);
  }
}
