import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleAppointmentService implements serviceNotifyInterface{
  
  constructor(private connection: ServerConnectionService) { }

  notifty(data: any) {
    this.componente.response(data);
  }

  componente: componentResponseInterface;

  execute(component:componentResponseInterface, body:any){

    this.componente = component;

    console.log("service: schedule-appointment");

    let httpHeaderss = new HttpHeaders();

    this.connection.post('/user/patient/appointment/schedule',httpHeaderss,body,this);
  }
}
