import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../server-connection.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private connection: ServerConnectionService) { }

  met = 'post';


  execute(){
    // this.connection.login();
    //SETEAR LOS VALORES (METHOD - PARAMETERS - BODY - ETC)
    //QUE NECESITE EL REQUEST DEL SERVICEIO CONNECTION PARA FUNCIONAR
    // let response =  this.connection.get();
    // this.connection.apiKey = response.user.api_token;
  }
}
