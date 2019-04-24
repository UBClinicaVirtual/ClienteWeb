import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetClinicsService } from 'src/app/services/server-connection/requests/clinics/get-clinics.service';
import { GlobalesService } from 'src/app/services/globales.service';
import { optionData } from './option-data';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';
import { GetHcpsService } from 'src/app/services/server-connection/requests/hcps/get-hcps.service';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css']
})

export class AppointmentSearchComponent implements OnInit {

  isLoading:boolean = false;
  requestType: string = "";
 
  constructor(private getClinics : GetClinicsService, private globales: GlobalesService,private getSpecialities : GetSpecialitiesService, private getHcps: GetHcpsService) {
    this.getOptionData();
  }


  public clinics: optionData[] = [];
  public specialities: optionData[] = [];
  public hcps: optionData[] = [];

  public filtros = {
    clinic_id: Number,
    speciality_id: Number,
    hcp_id: Number,
    date_from: Date,
    date_to: Date
    
  }

  private getOptionData(){
    this.requestType = "getClinics";
    this.getClinics.execute(this);
  }


  onClick(){
    console.log(this.filtros);
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

  requestTypeOperation = {
    "getClinics":function(component,data){
        component.parseClincis(data["clinics"]);
        component.requestType = "getSpecialities";
        component.getSpecialities.execute(component);
    },
    "getSpecialities" : function(component,data){
        component.parseSpecialities(data["specialities"]);
        component.requestType = "getHcps";
        component.getHcps.execute(component);
    },
    "getHcps" : function(component,data){
        component.parseHcps(data["hcps"]);
        component.done();
    }
  }

  notify(data){
    this.requestTypeOperation[this.requestType](this,data);
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
}
