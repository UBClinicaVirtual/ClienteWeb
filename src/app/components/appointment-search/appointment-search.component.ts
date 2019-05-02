import { Component, OnInit} from '@angular/core';
import { GetClinicsService } from 'src/app/services/server-connection/requests/clinics/get-clinics.service';
import { GlobalesService } from 'src/app/services/globales.service';
import { optionData } from './option-data';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';
import { GetHcpsService } from 'src/app/services/server-connection/requests/hcps/get-hcps.service';
import { GetAvailableAppointmentsService } from 'src/app/services/server-connection/requests/appointments/get-available-appointments.service';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css']
})

export class AppointmentSearchComponent implements OnInit, componentResponseInterface {
 
  isLoading:boolean = false;
  mostrarTurnos:boolean = false;
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

  loadingInfo = {
    state : false,
    msg   : ""
  };

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }



  private getOptionData(){
    this.requestType = "getClinics";
    this.loadingInfo.state= true;
    this.loadingInfo.msg = "Buscando clinicas";

    // this.sleep(5000).then(() => {
    //   this.loadingInfo.msg = "Ya no cargo busqueda";
    // });

    if(!this.getClinics.data)
       this.getClinics.execute(this);
     else
       this.response(this.getClinics.data);
  }


  onClick(){
    this.loadingInfo.state = true;
    this.loadingInfo.msg = "Buscando turnos disponibles";

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

  public turnos;

  requestTypeOperation = {
    "getClinics":function(component,data){
        component.parseClincis(data["clinics"]);
        component.requestType = "getSpecialities";
        console.log(data);
        if(!component.getSpecialities.data){
          component.loadingInfo.msg = "Buscando especialidades";
          component.getSpecialities.execute(component);
        }
        else{
          component.response(component.getSpecialities.data);
        }
    },
    "getSpecialities" : function(component,data){
        component.parseSpecialities(data["specialities"]);
        component.requestType = "getHcps";
        console.log(data);
        if(!component.getHcps.data){
          component.loadingInfo.msg = "Buscando doctores";
          component.getHcps.execute(component);
        }else{
          component.response(component.getHcps.data);
        }
    },
    "getHcps" : function(component,data){
        component.parseHcps(data["hcps"]);
        console.log(data);
        component.done();
        component.loadingInfo.state= false;
    },
    "getAvailableAppointments": function(component,data){
        component.turnos = data['available_appointments'];
        component.mostrarTurnos = true;
        component.loadingInfo.state= false;

        if( !(component.turnos.length > 0) ){
          alert("No hay turnos disponibles");
        }
    }
  }
}
