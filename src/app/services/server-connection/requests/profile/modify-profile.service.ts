import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModifyProfileService implements serviceNotifyInterface{

 

  constructor(private connection: ServerConnectionService) { }

  notifty(data: any) {
    this.componente.response(data);
    console.log(data);
  }

  componente: componentResponseInterface;

  execute(component:componentResponseInterface, body:any){

    this.componente = component;

    console.log("service: modify-profile");

    let httpHeaderss = new HttpHeaders();

    this.connection.post('/user/patient/',httpHeaderss,body,this);
  }
}
