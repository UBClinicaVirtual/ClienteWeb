import { Component } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ServerConnectionService } from 'src/app/services/server-connection/server-connection.service';
import { GlobalesService } from 'src/app/services/globales.service';
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';
import { GetAppointmentsService } from 'src/app/services/server-connection/requests/appointments/get-appointments.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(
    private getAppointments:GetAppointmentsService,
    private loginService: LoginService,
    private connection: ServerConnectionService,
    private globales: GlobalesService) { }


  login() {
    this.loginService.execute();
  }

  onClickButton() {
    this.connection.onClickButton();
  }

  appointments() {
    this.getAppointments.execute(this);

  }

  userdata() {
    this.connection.userdata();

  }

  esVisibleClick() {
    this.globales.reverNavBar();
  }
}
