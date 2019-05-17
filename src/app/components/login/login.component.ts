import { Component, OnInit } from '@angular/core';
import {GoogleSignInSuccess} from 'angular-google-signin';
import { ServerConnectionService } from 'src/app/services/server-connection/server-connection.service';
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';
import { ServerConfigService } from 'src/app/config/server-config.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, componentResponseInterface {
  getBody() {
    throw new Error("Method not implemented.");
  }


  response(data: any) {
    console.log(data);
  }



  constructor(private connection: ServerConnectionService,private loginService: LoginService,private config:ServerConfigService) { }

  private myClientId: string = this.config.getClientID();

  connected = false;

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: any = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    this.loginService.userProfile = profile;
    this.connection.token = googleUser.Zi.id_token;

    //probando
    localStorage.setItem('token',this.connection.token);
    this.loginService.execute();
    console.log(this.connection.token);

  }
  ngOnInit() {
  }
}