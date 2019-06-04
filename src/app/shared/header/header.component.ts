import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  profile: any;

  constructor( public _usuarioService: UsuarioService,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.profile = this.loginService.userProfile;
  }

}
