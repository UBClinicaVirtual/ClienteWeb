import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../services/server-connection/server-connection.service';
import { isInteger, toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { menuSidebar } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class UsertypeConfigService {

 constructor(private serviceConnectionService: ServerConnectionService){}

generateMenu(){

  let userType = Number(this.serviceConnectionService.userType);

  return menuSidebar.map(function(data,){
      if(data.userType.find(function(boton){
          return boton == userType;
      })){
          delete data["userType"];
          return data;
      };
  }).filter(function (item) {
      return item != null;
  });
}
}
