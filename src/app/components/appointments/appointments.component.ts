import { Component, OnInit, Input } from '@angular/core';
import { GetAppointmentsService } from 'src/app/services/server-connection/requests/appointments/get-appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit,componentResponseInterface {
  getBody() {
    throw new Error("Method not implemented.");
  }

  loadingInfo = {
    state : false,
    msg   : ""
  };


  constructor(private getAppointments:GetAppointmentsService) {
  }

  @Input() turnos: {};

  appointmentResponse;

  response(data){
    this.loadingInfo.state = false;
    this.turnos = data.appointments;
  }

  ngOnInit() {
    if(!this.turnos){
      this.loadingInfo.msg = "Cargando turnos";
      this.loadingInfo.state= true;
      this.getAppointments.execute(this);
    }
  }



  // response = {
  //   "appointments": [
  //       {
  //           "id": 753,
  //           "clinic_id": 123,
  //           "clinic_name": "Clinica de la trinidad",
  //           "speciality_id": 789,
  //           "speciality_name": "Guardia de ginecologia",
  //           "hcp_id": 8560,
  //           "hcp_first_name": "Juan Jose",
  //           "hcp_last_name": "Ingenieros",
  //           "appointment_date": "2018/01/02 12:57",
  //           "appointment_status_id": 1,
  //           "appointment_status_name": "Pending"
  //       },
  //       {
  //           "id": 8820,
  //           "clinic_id": 123,
  //           "clinic_name": "Clinica de la trinidad",
  //           "speciality_id": 124,
  //           "speciality_name": "Traumatologo",
  //           "hcp_id": 9988,
  //           "hcp_first_name": "Bernabe",
  //           "hcp_last_name": "Marquez",
  //           "appointment_date": "2018/04/01 16:90",
  //           "appointment_status_id": 1,
  //           "appointment_status_name": "Pending"
  //       },
  //       {
  //           "id": 8820,
  //           "clinic_id": 123,
  //           "clinic_name": "Clinica de la trinidad",
  //           "speciality_id": 124,
  //           "speciality_name": "Traumatologo",
  //           "hcp_id": 9988,
  //           "hcp_first_name": "Bernabe",
  //           "hcp_last_name": "Marquez",
  //           "appointment_date": "2018/04/01 16:90",
  //           "appointment_status_id": 1,
  //           "appointment_status_name": "Pending"
  //       },
  //       {
  //           "id": 8820,
  //           "clinic_id": 123,
  //           "clinic_name": "Clinica de la trinidad",
  //           "speciality_id": 124,
  //           "speciality_name": "Traumatologo",
  //           "hcp_id": 9988,
  //           "hcp_first_name": "Bernabe",
  //           "hcp_last_name": "Marquez",
  //           "appointment_date": "2018/04/01 16:90",
  //           "appointment_status_id": 1,
  //           "appointment_status_name": "Pending"
  //       },
  //       {
  //           "id": 8820,
  //           "clinic_id": 123,
  //           "clinic_name": "Clinica de la trinidad",
  //           "speciality_id": 124,
  //           "speciality_name": "Traumatologo",
  //           "hcp_id": 9988,
  //           "hcp_first_name": "Bernabe",
  //           "hcp_last_name": "Marquez",
  //           "appointment_date": "2018/04/01 16:90",
  //           "appointment_status_id": 1,
  //           "appointment_status_name": "Pending"
  //       }
  //   ]
  // }


}
