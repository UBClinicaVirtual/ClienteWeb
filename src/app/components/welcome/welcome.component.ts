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
export class WelcomeComponent implements componentResponseInterface{
  getBody() {
    throw new Error("Method not implemented.");
  }

  response(data: any) {
    console.log(data);
  }

  constructor(
    private getAppointments:GetAppointmentsService,
    private loginService: LoginService,
    private connection: ServerConnectionService,
    private globales: GlobalesService) { }


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

  turnos = [
		{
			"id": 78,
			"hcp_id": 1,
			"hcp_first_name": "Juan Jose",
			"hcp_last_name": "Ingenieros",			
			"clinic_id": 1,
			"clinic_name": "Clinica de la trinidad",
			"speciality_id": 1,
			"speciality_name": "Guardia de ginecologia",
			"appointment_hour": "18:30",
			"day_of_the_week": 4,
			"appointment_date": "2018-09-20"            
		},
	]
}
