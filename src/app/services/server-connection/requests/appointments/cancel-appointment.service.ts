import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CancelAppointmentService  implements serviceNotifyInterface{

  notifty(data: any) {
    console.log('POST Request is successful :D', data);
    this.componente.response(data);
  }

  constructor(private connection: ServerConnectionService) { }

  componente: componentResponseInterface;

  execute(component:componentResponseInterface){

    this.componente = component;

    console.log("service: get-appointments");

    let httpHeaderss = new HttpHeaders();

    let body = {}

    console.log("httpHeaderss",httpHeaderss);
    console.log("contexto",this);
    this.connection.post('/user/patient/appointments',httpHeaderss,body,this);
  }
}
