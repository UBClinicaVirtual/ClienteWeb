import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/service.index';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements serviceNotifyInterface {

  public userProfile;

  constructor(private connection: ServerConnectionService, private usuarioService : UsuarioService) { }

  notifty(data: any) {
    console.log('POST Request is successful :D', data);
    //si es usuario registrado 
    // this.router.navigate(['./dashboard']);
    //si no
    //this.router.navigate(['./register']);
    this.connection.apiKey = data['user']['api_token'];
    this.connection.userType = data['puser']['user_type_id'];
    this.usuarioService.guardarStorage(data['user']['api_token']);
  }

  execute(){
    console.log("service: login");

    let httpHeaderss = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });

    let body = {'access_token': this.connection.token};
    this.connection.post('/login',httpHeaderss,body,this);
  }
}