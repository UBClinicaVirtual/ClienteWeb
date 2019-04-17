import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetClinicsService } from 'src/app/services/server-connection/requests/clinics/get-clinics.service';
import { GlobalesService } from 'src/app/services/globales.service';


@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css']
})

export class AppointmentSearchComponent implements OnInit {

  constructor(private getClinics : GetClinicsService, private globales: GlobalesService) {
    
  }

  public optionsArray = {

    clinics: ['San Martic','San Jose','San Pablo',],
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
    this.getClinics.execute(this);
  }

  private buildOptionsArray(){
    
  }

  notify(data){
    this.optionsArray.clinics.push(data["clinics"][0].business_name);
  }

  ifNavBar(){
    return this.globales.getNavbar();
  }
}
