import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAppointmentsService {

  constructor(private connection: ServerConnectionService) { }

  notify(data){
    console.log('POST Request is successful :D', data);
  }

  execute(){
    console.log("Solicitando turnos...");

    let httpHeaderss = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.connection.apiKey
    });

    let body = {}
    this.connection.post('/user/patient/appointments',httpHeaderss,body,this);
  }
}
