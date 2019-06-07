import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';
import { UsuarioGoogle } from 'src/app/models/usuarioGoogle.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuarioGoogle: UsuarioGoogle;

  profile: any;

  constructor( public _usuarioService: UsuarioService,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    //this.profile = this.loginService.userProfile;
    this.usuarioGoogle = this._usuarioService.usuarioGoogle;
   // console.log(this.usuarioGoogle);
  }

}
