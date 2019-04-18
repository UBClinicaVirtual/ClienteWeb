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
 
  constructor(private getClinics : GetClinicsService, private globales: GlobalesService,private getSpecialities : GetSpecialitiesService, private getHcps: GetHcpsService) {
    //this.getClinics.execute(this);
    //this.getSpecialities.execute(this);
    this.getHcps.execute(this);
  }

  public clinics: optionData[] = [];
  public cspecialities: optionData[] = [];
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
    //this.getClinics.execute(this);
  }

  private buildOptionsArray(){
    
  }

  notify(data){
    //this.clinics.push(new optionData(data["clinics"][0].id,data["clinics"][0].business_name))
    //this.clinics.push(new optionData(data["specialities"][0].id,data["specialities"][0].name))
    this.clinics.push(new optionData(data["hcps"][0].id,data["hcps"][0].first_name + "," + data["hcps"][0].last_name))
    this.isLoading = true;
  }

  ifNavBar(){
    return this.globales.getNavbar();
  }
}
