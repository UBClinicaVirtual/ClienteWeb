import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login.component.css']
})
export class Login2Component implements OnInit {

  auth2: any;

  constructor(public router: Router) { }

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

      let token = googleUser.getAuthResponse().id_token;

      console.log(token);

    });
  }

  ingresar(){
    
    this.router.navigate(['/dashboard']);
  }

}
