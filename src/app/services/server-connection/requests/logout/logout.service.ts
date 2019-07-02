import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService implements serviceNotifyInterface{
  constructor(private connection: ServerConnectionService) { }
  notifty(data: any) {
    this.componente.response(data);
  }

  componente: componentResponseInterface;

  execute(component:componentResponseInterface, body:any){
    this.componente = component;

    console.log("Service: Logout");

    let httpHeaders = new HttpHeaders();

    this.connection.post('/logout',httpHeaders,body,this);
  }

}
