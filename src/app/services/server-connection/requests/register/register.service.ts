import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ServerConnectionService } from '../../server-connection.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements serviceNotifyInterface{
  
  notifty(data: any) {
    console.log('POST Request is successful :D', data);
    this.component.response(data);
  }

  constructor( private connection: ServerConnectionService) { }

  component: componentResponseInterface;

  execute(component: componentResponseInterface){

    this.component = component;

    console.log("service: register");

    let httpHeaderss = new HttpHeaders();

    let body = {}

    this.connection.post('/register',httpHeaderss,body,this);

  }
}
