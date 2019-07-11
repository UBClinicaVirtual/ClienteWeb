
 ///////////////////////////////////////////////////////////
 //                    New Profile                        //
 ///////////////////////////////////////////////////////////

 import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService, SpecialityService, HcpService, PatientService } from 'src/app/services/service.index';
import { UsuarioGoogle } from 'src/app/models/usuarioGoogle.model';
import { Patient } from 'src/app/models/patient.model';
import { Gender} from 'src/app/models/gender.model';
import { ModifyProfileService } from 'src/app/services/server-connection/requests/profile/modify-profile.service';
import swal from 'sweetalert';
import { GetGenderService } from 'src/app/services/server-connection/requests/gender/get-gender.service';
import { Hcps } from 'src/app/models/hcp.model';
import { Especialidad } from 'src/app/models/speciality.model';

declare function init_plugins();
@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: []
})
export class ProtectedComponent implements OnInit,componentResponseInterface {
  
 
  usuarioGoogle: UsuarioGoogle;
  paciente:Patient;
  genders : Gender[] = [];
  hcp: Hcps;
  user:number;
  specialities: Especialidad [] = [];
  speciality: Especialidad = new Especialidad('','');
  
  
  constructor(
    public _usuarioService: UsuarioService,
    
    public _specialityService: SpecialityService,
    public _hcpService: HcpService,
    public _patientService: PatientService
  //  private getGendersService: GetGenderService
    ) { 
      this.usuarioGoogle = this._usuarioService.usuarioGoogle;
      this.paciente = this._usuarioService.paciente;
      this.hcp = this._usuarioService.hcp;

      if(this.paciente.register_number == null){
        
        this.user = 1;
      }else{
        
        this.user=2;
      }
     
      
    }
    
    ngOnInit() {
      init_plugins();
      this.cargarEspecialidades();
      
      
    }
    cambioEspecialidad(id:string){
    
      this.speciality.id = id;
  
    }

    cargarEspecialidades(){
   

      this._specialityService.cargarEspecialidades()
        .subscribe((resp:any) => {
          this.specialities = resp.specialities;
          
        });    
          };
    
    response(data: any) {
      //alert("Paciente modificado");
    //  console.log("RESPONSE:" + data);
     // this._usuarioService.guardarPaciente(data['patient']);
    //  swal('Perfil Actualizado',"", 'success');
    }

 
  guardar(paciente: Patient){
   

      if(paciente.address === this.paciente.address 
        && paciente.birth_date === this.paciente.birth_date 
        && paciente.gender_id === this.paciente.gender_id 
        && paciente.address ===  this.paciente.address 
        && paciente.phone === this.paciente.phone
        && paciente.register_number === this.paciente.register_number
      
        ){
          swal('No realizo cambios en su perfil',"", 'error');
        
      }else{

        if(paciente.register_number === null){
          
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

            this._patientService.actualizarPaciente(body)
                .subscribe();
        }else{
          let body =
          {
            "hcp":{
              "first_name": this.paciente.first_name,
              "last_name": this.paciente.last_name,        
              "identification_number": paciente.identification_number,
              "register_number": paciente.register_number,
              "birth_date": paciente.birth_date,
              "gender_id": paciente.gender_id,
              "address": paciente.address,
              "phone": paciente.phone,
              "specialities": '['+this.speciality.id+']'
            }  
         }

         this._hcpService.actualizarHcp(body)
                .subscribe();

        }

      
     

    
      
    //   this.modifyprofileservice.execute(this,body);

    }
      }
  
 
  

 


}

