import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppointmentsComponent } from 'src/app/components/appointments/appointments.component';

@Injectable({
  providedIn: 'root'
})
export class GetAppointmentsService implements serviceNotifyInterface {
  notifty(data: any) {
    console.log('POST Request is successful :D', data);
    this.componente.response(data);
  }

  constructor(private connection: ServerConnectionService) { }

  componente: componentResponseInterface;

  execute(component:componentResponseInterface){

    this.componente = component;

    console.log("service: get-appointments");

    let httpHeaderss = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.connection.apiKey
    });

    let body = {}
    this.connection.post('/user/patient/appointments',httpHeaderss,body,this);
  }
}
