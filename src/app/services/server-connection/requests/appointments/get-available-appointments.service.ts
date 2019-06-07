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

  execute(component:componentResponseInterface, body:any){

    this.componente = component;

    console.log("service: get-appointments-available");

    let httpHeaderss = new HttpHeaders();

    this.connection.post('/appointment/available',httpHeaderss,body,this);
  }
}
