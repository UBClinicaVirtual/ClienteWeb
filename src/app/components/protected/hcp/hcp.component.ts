
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
import { Hcps } from 'src/app/models/hcp.model';

@Component({
  selector: 'app-hcp',
  templateUrl: './hcp.component.html',
  styles: []
})
export class HcpComponent implements OnInit,componentResponseInterface {
  
 
  usuarioGoogle: UsuarioGoogle;
  paciente:Patient;
  genders : Gender[] = [];
  hcp: Hcps;
  
  
  constructor(
    public _usuarioService: UsuarioService,
    private modifyprofileservice: ModifyProfileService,
  //  private getGendersService: GetGenderService
    ) { 
      this.usuarioGoogle = this._usuarioService.usuarioGoogle;
      this.paciente = this._usuarioService.paciente;
      this.hcp = this._usuarioService.hcp;
      
      
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

