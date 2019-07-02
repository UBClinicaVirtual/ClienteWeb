import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetGenderService  implements serviceNotifyInterface{

  notifty(data: any) {
    this.data = data;
    console.log('SEXOSSS: '+ data);
    this.componente.response(data);
  }

  data:any;

  constructor(private connection: ServerConnectionService) { }

  componente: componentResponseInterface;

  execute(component: componentResponseInterface,body:any){
    this.componente = component;
    console.log("service: get-genders");
    let httpHeaders = new HttpHeaders();

    
    this.connection.get('/genders',httpHeaders,this);
  }
}
