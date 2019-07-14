import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpHeaders } from '@angular/common/http';
import { AppointmentComponent } from 'src/app/components/appointment/appointment.component';


@Injectable({
  providedIn: 'root'
})
export class CancelAppointmentService  implements serviceNotifyInterface{

  notifty(data: any) {
    console.log('POST Request is successful :D', data);
    console.log(data);
  }

  constructor(private connection: ServerConnectionService) { }

  componente: AppointmentComponent;

  execute(component:AppointmentComponent){

    this.componente  = component;

    console.log("service: cancel-appointment");

    let httpHeaderss = new HttpHeaders();

    let body = {"appointment_id": this.componente.turno.id}

    this.connection.post('/appointment/cancel',httpHeaderss,body,this);
  }
}
