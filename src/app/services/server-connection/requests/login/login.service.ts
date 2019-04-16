import { Injectable } from '@angular/core';
import {ServerConnectionService} from '../../server-connection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private connection: ServerConnectionService) { }

  notify(data){
    console.log('POST Request is successful :D', data);
    this.connection.apiKey = data['user']['api_token'];
    console.log(this.connection.apiKey );
  }

  execute(){
    let httpHeaderss = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });

    let body = {'access_token': this.connection.token};
    let data = this.connection.post('/login',httpHeaderss,body,this);
  }
}
