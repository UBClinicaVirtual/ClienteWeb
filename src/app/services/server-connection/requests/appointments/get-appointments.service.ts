import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAppointmentsService implements serviceNotifyInterface {
  notifty(data: any) {
    console.log('POST Request is successful :D', data);
  }

  constructor(private connection: ServerConnectionService) { }


  execute(){
    console.log("Solicitando turnos...");

    let httpHeaderss = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.connection.apiKey
    });

    let body = {}
    this.connection.post('/user/patient/appointments',httpHeaderss,body,this);
  }
}
