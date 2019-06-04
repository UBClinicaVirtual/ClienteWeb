import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService  } from 'src/app/services/service.index';
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  profile: any;

  constructor( public _sidebar: SidebarService,
                public _usuarioService: UsuarioService,
                private loginService: LoginService) { }

  ngOnInit() {
    this.profile = this.loginService.userProfile;
    
  }

}
