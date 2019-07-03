import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements serviceNotifyInterface {

  public userProfile;

  constructor(public router: Router, private connection: ServerConnectionService, private usuarioService : UsuarioService) { }

  notifty(data: any) {
    console.log('POST Request is successful :D', data);
    this.connection.apiKey = data['user']['api_token'];
    this.connection.userType = data['user']['user_type_id'];
    
    if(this.connection.userType == 1){
      this.usuarioService.guardarStorage(data['user']['api_token'], 'registrado');
    //  this.router.navigate(['./dashboard']);
      window.location.href = '#/dashboard';
      this.usuarioService.guardarPaciente(data['patient'])
    }if(this.connection.userType ==0){
      this.usuarioService.guardarStorage(data['user']['api_token'], '');
      window.location.href = '#/register';
    }
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