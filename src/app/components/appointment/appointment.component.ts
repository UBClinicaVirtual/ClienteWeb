import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleAppointmentService } from 'src/app/services/server-connection/requests/appointments/schedule-appointment.service';
import { CancelAppointmentService } from 'src/app/services/server-connection/requests/appointments/cancel-appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styles: []
})
export class AppointmentComponent implements OnInit, componentResponseInterface {

  response(data: any) {
    swal("Operacion Exitosa", this.responseMsg, "success")
  }

  responseMsg:string;

  @Input() turno:any = {};

  constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal, 
    private scheduleAppointmentService: ScheduleAppointmentService,
    private cancelAppointmentService: CancelAppointmentService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }

  scheduleAppointment(){
    let body = 
    {
      "clinic_appointment_schedule_id" : this.turno.id,
      "appointment_date": this.turno.appointment_date.substring(0,10)
    }
    this.scheduleAppointmentService.execute(this,body);
    this.responseMsg = "Turno solicitado correctamente"

  }

  cancelarTurno(){
    let body = {"appointment_id": this.turno.id}
    this.cancelAppointmentService.execute(this,body);
    this.responseMsg = "Turno cancelado correctamente"

  }

}
