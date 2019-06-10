import { Injectable } from '@angular/core';
import { ServerConnectionService } from '../services/server-connection/server-connection.service';
import { isInteger, toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable({
  providedIn: 'root'
})
export class UsertypeConfigService {
 constructor(private serviceConnectionService: ServerConnectionService){}

  appconfig = {
      "menuSidebar":
      [
          {   "titulo": 'Dashboard', 
              "userType":[1,2,3],
              "url": '/dashboard'
          },
          {
              "titulo":"Buscar Turno",
              "userType":[1],
              "url":"/search-turn"
          },
          {
              "titulo":"Mis turnos",
              "userType":[1,2],
              "url":"/turnos"
          },
          {
              "titulo":"Reporte Medico",
              "userType":[2],
              "url":"/hcp-report"
          },
          {
              "titulo":"Buscar Doctores",
              "userType":[3],
              "url":"/search-hcps"
          },
          {
              "titulo":"Mi Perfil",
              "userType":[1,2,3],
              "url":"/protected"
          }
      ]
  }

generateMenu(){

  let userType = Number(this.serviceConnectionService.userType);

  return this.appconfig.menuSidebar.map(function(data,){
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
