import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnectionService } from '../services/server-connection/server-connection.service';
import { LoginService } from '../services/server-connection/requests/login/login.service';
import { UsuarioService } from '../services/usuario/usuario.service';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login.component.css']
})
export class Login2Component implements OnInit {

  auth2: any;

  constructor(public router: Router,private connection: ServerConnectionService, private loginService: LoginService, private usuarioService : UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();


  }

  googleInit(){

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '154525363401-7rn9a462ng2ukds3pcgff8jp4uv9c9tu.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // INFORMACION DE LA CUENTA
        scope: 'profile email'

      });

      this.attachSignin(document.getElementById('btnGoogle'))
    });;
  }

  attachSignin(element){
    this.auth2.attachClickHandler(element, {}, (googleUser) => {

      //let profile = googleUser.getBasicProfile();

      this.connection.token  = googleUser.getAuthResponse().id_token;
      this.usuarioService.guardarStorage(this.connection.token);
      this.loginService.execute();
      this.router.navigate(['./dashboard']);
    });
  }
}
