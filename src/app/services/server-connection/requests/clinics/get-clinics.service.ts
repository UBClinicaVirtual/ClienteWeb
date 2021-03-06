import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetClinicsService implements serviceNotifyInterface{
  notifty(data: any) {
    this.data = data;
    this.componente.response(data);
  }

  data: any;

  constructor(private connection: ServerConnectionService) { }

  componente:componentResponseInterface;

  execute(component: componentResponseInterface){

    this.componente = component;

    console.log("service: get-clinics");

    let httpHeaderss = new HttpHeaders();

    let body = {}
    this.connection.post('/clinic/search',httpHeaderss,body,this);
  }
}
