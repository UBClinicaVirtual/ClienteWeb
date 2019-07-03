/*  import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  profile: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.profile = this.loginService.userProfile;


    // if (this.loginService.userProfile) {

    //   this.profile = this.loginService.userProfile;
    // } else {
    //     console.warn("no encontro perfil");
    //     this.auth.getProfile((err, profile) => {
    //     this.profile = profile;
    //   });
    //   }
  }

  usertype(type){
    switch (type) {
      case '0':
          return "Sin Perfil";   
          break;
      case '1':
          return "Paciente";
          break;
      case '2':
          return "Doctor";
          break;
      case '3':
          return "Clinica";
          break;
      default:
          return "No asignado";
          break;
    }
  }

  noteditable='readonly';

  user = {
    "user": {
        "id": 6,
        "email": "ubelarga@gmail.com",
        "created_at": "2018-09-20 17:30:52",
        "updated_at": "2018-09-27 15:06:20",
        "api_token": "HoFcCOSgtjyfD5GELBuyQ3xHZasPiBSyqGsFeDsYLXj4BewYcIEOvyqAn0iZ",
        "active": 1,
        "user_type_id": "2"
    },
	"patient":{
		"id": 6,
		"first_name": "walter",
		"last_name": "ub",        
		"created_at": "2018-09-20 17:30:52",
		"updated_at": "2018-09-27 15:06:20",
		"identification_number": "0303456",
		"birth_date": "1987-01-01",
		"gender_id": 0,
		"address": "Street 1234",
		"phone": "1234-4758"
	},
	"hcp":{
		"id": 6,
		"first_name": "MD. walter",
		"last_name": "ub",        
		"created_at": "2018-09-20 17:30:52",
		"updated_at": "2018-09-27 15:06:20",
		"identification_number": "0303456",
		"register_number": "RG3685",
		"birth_date": "1987-01-01",
		"gender_id": 0,
		"address": "Street 1234",
		"phone": "1234-4758",
		"specialities": [ {"id": 1, "name": "Guardia"} ]
	},
	"clinic":{
		"id": 6,
		"created_at": "2018-09-20 17:30:52",
		"updated_at": "2018-09-27 15:06:20",		
		"business_name": "Clinica San Martin",
		"business_number": "2003034567",		
		"address": "Street 1234",
		"phone": "1234-4758",
		"hcp_specialities": [ {"id": 44, "hcp_id": 33, "speciality_id": 12}],
		"hcps": [ {"id": 33, "first_name": "Dr. Juan", "last_name": "Perez"} ],
		"specialities": [ {"id": 12, "name": "Guardia"} ]
	}
	
}

} */
 



 

 ///////////////////////////////////////////////////////////
 //                    New Profile                        //
 ///////////////////////////////////////////////////////////

 import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import { UsuarioGoogle } from 'src/app/models/usuarioGoogle.model';
import { Patient } from 'src/app/models/patient.model';
import { Gender} from 'src/app/models/gender.model';
import { ModifyProfileService } from 'src/app/services/server-connection/requests/profile/modify-profile.service';
import swal from 'sweetalert';
import { GetGenderService } from 'src/app/services/server-connection/requests/gender/get-gender.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: []
})
export class ProtectedComponent implements OnInit,componentResponseInterface {
  
  usuario:Usuario;
  usuarioGoogle: UsuarioGoogle;
  paciente:Patient;
  genders : Gender[] = [];
  
  
  constructor(
    public _usuarioService: UsuarioService,
    private modifyprofileservice: ModifyProfileService,
  //  private getGendersService: GetGenderService
    ) { 
      this.usuarioGoogle = this._usuarioService.usuarioGoogle;
      this.paciente = this._usuarioService.paciente;
      
      
    }
    
    ngOnInit() {

     // this.getGendersService.execute(this,"");
      
    }
    
    response(data: any) {
      //alert("Paciente modificado");
      console.log("RESPONSE:" + data);
      this._usuarioService.guardarPaciente(data['patient']);
      swal('Perfil Actualizado',"", 'success');
    }

 
  guardar(paciente: Patient){
     

      if(paciente.address === this.paciente.address 
        && paciente.birth_date === this.paciente.birth_date 
        && paciente.gender_id === this.paciente.gender_id 
        && paciente.address ===  this.paciente.address 
        && paciente.phone === this.paciente.phone){
          swal('No realizo cambios en su perfil',"", 'error');
        
      }else{
     

      
     //  this.paciente.address = paciente.address;
      // this.paciente.birth_date = paciente.birth_date;
      // this.paciente.gender_id = paciente.gender_id;
      // this.paciente.identification_number = paciente.identification_number;
      // this.paciente.phone = paciente.phone;

      
     let body = 
     
     {
       "patient":{
            "first_name" : this.paciente.first_name,
            "last_name": this.paciente.last_name,
            "identification_number": paciente.identification_number,
            "birth_date": paciente.birth_date,
            "gender_id": paciente.gender_id,
            "address": paciente.address,
            "phone": paciente.phone
       }
     };
     

    
      
       this.modifyprofileservice.execute(this,body);

    }
      }
  
 
  

 


}

