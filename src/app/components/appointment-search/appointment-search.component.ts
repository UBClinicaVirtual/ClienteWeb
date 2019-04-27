import { Component, OnInit} from '@angular/core';
import { GetClinicsService } from 'src/app/services/server-connection/requests/clinics/get-clinics.service';
import { GlobalesService } from 'src/app/services/globales.service';
import { optionData } from './option-data';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';
import { GetHcpsService } from 'src/app/services/server-connection/requests/hcps/get-hcps.service';
import { GetAvailableAppointmentsService } from 'src/app/services/server-connection/requests/appointments/get-available-appointments.service';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css']
})

export class AppointmentSearchComponent implements OnInit, componentResponseInterface {
 
  isLoading:boolean = false;
  requestType: string = "";
 
  constructor(
    private getClinics : GetClinicsService, 
    private globales: GlobalesService,
    private getSpecialities : GetSpecialitiesService, 
    private getHcps: GetHcpsService,
    private getAvailableAppointments: GetAvailableAppointmentsService
    ){
    this.getOptionData();
  }


  public clinics: optionData[] = [];
  public specialities: optionData[] = [];
  public hcps: optionData[] = [];

  public filtros = {
    "clinic_id": "",
    "speciality_id": "",
    "hcp_id": "",
    "date_from": "",
    "date_to": ""
  }

  private getOptionData(){
    this.requestType = "getClinics";
    this.getClinics.execute(this);
  }


  onClick(){
    console.log(this.filtros);
    this.requestType = "getAvailableAppointments";
    this.getAvailableAppointments.execute(this);
  }


  ngOnInit() {
  }

  private buildOptionsArray(){

  }

  private done(){

    this.isLoading = true;
  }

  ifNavBar(){
    return this.globales.getNavbar();
  }

  response(data){
    this.requestTypeOperation[this.requestType](this,data);
  }

  getBody() {
    return this.filtros;
  }


  private parseClincis(clinics){
    for ( var clinic in clinics){
      this.clinics.push(new optionData(clinics[clinic].id,clinics[clinic].business_name));
    }
  }

  private parseHcps(hcps){
    for ( var hcp in hcps){
      this.hcps.push(new optionData(hcps[hcp].id,hcps[hcp].first_name + ", " + hcps[hcp].last_name));
    }
  }

  private parseSpecialities(specialities){
    for ( var specialitie in specialities){
      this.specialities.push(new optionData(specialities[specialitie].id,specialities[specialitie].name));
    }
  }

  turnos;

  requestTypeOperation = {
    "getClinics":function(component,data){
        component.parseClincis(data["clinics"]);
        component.requestType = "getSpecialities";
        console.log(data);
        component.getSpecialities.execute(component);
    },
    "getSpecialities" : function(component,data){
        component.parseSpecialities(data["specialities"]);
        component.requestType = "getHcps";
        console.log(data);
        component.getHcps.execute(component);
    },
    "getHcps" : function(component,data){
        component.parseHcps(data["hcps"]);
        console.log(data);
        component.done();
    },
    "getAvailableAppointments": function(component,data){
        console.log(data);
        this.turnos = data['appointments_available'];
    }
  }
}
