import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetClinicsService } from 'src/app/services/server-connection/requests/clinics/get-clinics.service';
import { GlobalesService } from 'src/app/services/globales.service';
import { optionData } from './option-data';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';
import { GetHcpsService } from 'src/app/services/server-connection/requests/hcps/get-hcps.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css']
})

export class AppointmentSearchComponent implements OnInit {

  isLoading:boolean = false;
  requestType: string = "";
 
  constructor(private getClinics : GetClinicsService, private globales: GlobalesService,private getSpecialities : GetSpecialitiesService, private getHcps: GetHcpsService) {
    this.requestType = "getClinics";
    this.getClinics.execute(this);
  }


  public clinics: optionData[] = [];
  public specialities: optionData[] = [];
  public hcps: optionData[] = [];

  public optionsArray = {
    specialities: ['Urologia','blablabla','experto en culos',],
    hcps: ['Pedro','Gabriel','Fernando']

  }

  public filtros = {
    clinic_id: Number,
    speciality_id: Number,
    hcp_id: Number,
    date_from: Date,
    date_to: Date
    
  }


  onClick(){
    console.log(this.filtros);
  }


  ngOnInit() {
  }

  private buildOptionsArray(){
    
  }

  /*
  private getOptionData(){
    let response1 = this.getClinics.execute(this);
    let response2 = this.getSpecialities.execute(this);
    let response3 = this.getHcps.execute(this);

    console.log(forkJoin([response1, response2, response3]))
   

    //this.populateData(forkJoin([response1, response2, response3]));
  }*/


  private done(){
    /*
    this.clinics.push(new optionData(data["clinics"][0].id,data["clinics"][0].business_name))
    this.specialities.push(new optionData(data["specialities"][0].id,data["specialities"][0].name))
    this.hcps.push(new optionData(data["hcps"][0].id,data["hcps"][0].first_name + ", " + data["hcps"][0].last_name))*/
    this.isLoading = true;
  }

  ifNavBar(){
    return this.globales.getNavbar();
  }

  // notify(data){
  //   switch(this.requestType) {
  //     case "getClinics":
  //       this.clinics.push(new optionData(data["clinics"][0].id,data["clinics"][0].business_name));
  //       this.requestType = "getSpecialities";
  //       this.getSpecialities.execute(this);
  //       break;
  //     case "getSpecialities":
  //       this.specialities.push(new optionData(data["specialities"][0].id,data["specialities"][0].name));
  //       this.requestType = "getHcps";
  //       this.getHcps.execute(this);
  //       break;
  //     case "getHcps":
  //       this.hcps.push(new optionData(data["hcps"][0].id,data["hcps"][0].first_name + ", " + data["hcps"][0].last_name))
  //       this.done();
  //       break;
  //   }
  // }


  requestTypeOperation = {
    "getClinics":function(data){
        this.clinics.push(new optionData(data["clinics"][0].id,data["clinics"][0].business_name));
        this.requestType = "getSpecialities";
        this.getSpecialities.execute(this);
    },
    "getSpecialities" : function(data){
        this.specialities.push(new optionData(data["specialities"][0].id,data["specialities"][0].name));
        this.requestType = "getHcps";
        this.getHcps.execute(this);
    },
    "getHcps" : function(data){
        this.hcps.push(new optionData(data["hcps"][0].id,data["hcps"][0].first_name + ", " + data["hcps"][0].last_name))
        this.done();
    }
  }

  notify(data){
    this.requestTypeOperation[this.requestType](data);
  }
}
