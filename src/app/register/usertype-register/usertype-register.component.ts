import { Component, OnInit, Input } from '@angular/core';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';

@Component({
  selector: 'app-usertype-register',
  templateUrl: './usertype-register.component.html',
  styleUrls: ['./usertype-register.component.css']
})
export class UsertypeRegisterComponent implements OnInit, componentResponseInterface {
  response(data: any) {
    this.information.state = false;
    console.log(data);
    this.specialities = data.specialities;
  }

  @Input() user: any;

  specialities;
  specialities_chosen = [];
  userData = {
    name:null,
    lastname:null,
    dni:null,
    born:null,
    gender:null,
    address:null,
    phone:null,
    specialities:null
  }
  registeredUser = {};

  constructor(private getSpecialitiesService : GetSpecialitiesService) { }
  information = {
    state : true,
    msg   : "Cargando Especialidades"
  };

  isLoading:boolean;

  ngOnInit() {
    this.isLoading = false;
    if(this.user){
      console.log(this.user);
    }

    this.information.state = true;
    this.information.msg = "Cargando Especialidades";
    this.getSpecialitiesService.execute(this);
  }

 

  specialitieChoosed(id){
    let specChoosed = document.getElementById(id);
    specChoosed.hidden = true;
    this.specialities_chosen.push({
     // "name":specChoosed.value,
      "id":specChoosed.id
    });
    console.log(this.specialities_chosen);
  }

  addUserProfile(){
    this.userData.specialities = this.specialities_chosen;
    console.log(this.userData);
    
  }

}
