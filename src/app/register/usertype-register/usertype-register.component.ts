import { Component, OnInit, Input } from '@angular/core';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioGoogle } from 'src/app/models/usuarioGoogle.model';
import { Patient } from 'src/app/models/patient.model';
import { UsuarioService } from 'src/app/services/service.index';
import swal from 'sweetalert';
import { ModifyProfileService } from 'src/app/services/server-connection/requests/profile/modify-profile.service';

@Component({
  selector: 'app-usertype-register',
  templateUrl: './usertype-register.component.html',
  styleUrls: ['./usertype-register.component.css']
})
export class UsertypeRegisterComponent implements OnInit, componentResponseInterface {

  usuario:Usuario;
   paciente:Patient;
   requestType: string = "";
  
   response(data) {
    // this.requestTypeOperation[this.requestType](this,data);

    //alert("Paciente modificado");
    console.log("RESPONSE:" + data);
    this._usuarioService.guardarPaciente(data['patient']);
    swal('Perfil Creado',"Ingrese nuevamente para acceder al sistema", 'success');
    //this._usuarioService.guardarStorage(data['user']['api_token'], 'registrado');
    window.location.href = '#/login2';
    
  }

  //----------------------------Revisar-------------------------------------------//
/*
  requestTypeOperation = {
    "getSpecialitiesService":function(component,data){
     // component.parseSpecialities(data["specialities"]);
     this.information.state = false;
     this.specialities = data.specialities;
    },
    "modifyprofileservice":function(component,data){
      this._usuarioService.guardarPaciente(data['patient']);
      swal('Perfil Creado',"", 'success');
      this._usuarioService.guardarStorage(data['user']['api_token'], 'registrado');
      window.location.href = '#/dashboard';

    }
    
  }
  */
 //-----------------------------------------------------------------------------//

  @Input() user: any;

  specialities;
  specialities_chosen = [];
  userData = {
    name:null,
    lastname:null,
    dni:null,
    born:null,
    gender:"1",
    address:null,
    phone:null,
    specialities:null
  }
  registeredUser = {};

  constructor(private getSpecialitiesService : GetSpecialitiesService,
          private modifyprofileservice: ModifyProfileService,
          public _usuarioService: UsuarioService) { 
       
    
  }
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

    //this.information.state = true;
    //this.information.msg = "Cargando Especialidades";
    //this.getSpecialitiesService.execute(this);
  }

 

  specialitieChoosed(id){
    let specChoosed = document.getElementById(id);
    specChoosed.hidden = true;
    this.specialities_chosen.push({
     // "name":specChoosed.value,
      "id":specChoosed.id
    });
    //console.log(this.specialities_chosen);
  }

  addUserProfile(){
    this.userData.specialities = this.specialities_chosen;
    if(this.specialities_chosen.length === 0){
      console.log("PACIENTE");

    
          // Gaby revisar el form validator (en el register esta en el form)
          if(this.userData.address === null || this.userData.born === null ||
            this.userData.dni === null || this.userData.lastname === null ||
            this.userData.name === null || this.userData.phone === null){
            swal('Faltan datos a completar',"", 'error');
          }else{

            let body =

            {
              "patient":{
                   "first_name" : this.userData.name,
                   "last_name": this.userData.lastname,
                   "identification_number": this.userData.dni,
                   "birth_date": this.userData.born,
                   "gender_id": this.userData.gender,
                   "address": this.userData.address,
                   "phone": this.userData.phone
              }
            };

            this.modifyprofileservice.execute(this,body);

          }

    }else{
      console.log("MEDICO");
    }
    
  }

}
