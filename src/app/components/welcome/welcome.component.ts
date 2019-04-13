import { Component } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ServerConnectionService } from 'src/app/services/server-connection/server-connection.service';
import { GlobalesService } from 'src/app/services/globales.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private connection: ServerConnectionService, private globales: GlobalesService) { }


  login() {
    this.connection.login();
  }

  onClickButton() {
    this.connection.onClickButton();
  }

  appointments() {
    this.connection.appointments();

  }

  userdata() {
    this.connection.userdata();

  }

  esVisibleClick() {
    this.globales.reverNavBar();
  }
}
