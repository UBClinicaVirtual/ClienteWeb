import { Component, OnInit } from '@angular/core';
import {GoogleSignInSuccess} from 'angular-google-signin';
import { ServerConnectionService } from 'src/app/services/server-connection/server-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private connection: ServerConnectionService) { }

  private myClientId: string = '154525363401-7rn9a462ng2ukds3pcgff8jp4uv9c9tu.apps.googleusercontent.com';


  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: any = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
    this.connection.token = googleUser.Zi.id_token;

    console.log(this.connection.token);
  }
  ngOnInit() {
  }
}