import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements serviceNotifyInterface {

  public userProfile;

  notifty(data: any) {
    console.log('POST Request is successful :D', data);
    this.connection.apiKey = data['user']['api_token'];
    this.connection.userType = data['user']['user_type_id'];
  }

  constructor(private connection: ServerConnectionService) { }

  execute(){
    console.log("service: login");

    let httpHeaderss = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });

    let body = {'access_token': this.connection.token};
    let data = this.connection.post('/login',httpHeaderss,body,this);
  }
}