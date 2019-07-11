import { Component, OnInit, Input } from '@angular/core';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioGoogle } from 'src/app/models/usuarioGoogle.model';
import { Patient } from 'src/app/models/patient.model';
import { UsuarioService, SpecialityService, HcpService, PatientService } from 'src/app/services/service.index';
import swal from 'sweetalert';
import { ModifyProfileService } from 'src/app/services/server-connection/requests/profile/modify-profile.service';
import { Especialidad } from 'src/app/models/speciality.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hcps } from 'src/app/models/hcp.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-usertype-register',
  templateUrl: './usertype-register.component.html',
  styleUrls: ['./usertype-register.component.css']
})
export class UsertypeRegisterComponent implements OnInit, componentResponseInterface {

  forma: FormGroup;

  usuario:Usuario;
   paciente:Patient;
   specialities: Especialidad [] = [];
   speciality: Especialidad = new Especialidad('','');
   prueba:number;
   
   
  
   response(data) {
    
    console.log("RESPONSE:" + data);
    this._usuarioService.guardarPaciente(data['patient']);
    swal('Perfil Creado',"Ingrese nuevamente para acceder al sistema", 'success');
    
    window.location.href = '#/login2';
    
  }

  @Input() user: any;

 
  registeredUser = {};

  constructor(
          public router: Router,
          public _usuarioService: UsuarioService,
          public _specialityService: SpecialityService,
          public _hcpService: HcpService,
          public _patientService: PatientService) { 
       
    
  }
  information = {
    state : true,
    msg   : "Cargando Especialidades"
  };

  isLoading:boolean;

  ngOnInit() {
    init_plugins();
    this.cargarEspecialidades();
    this.isLoading = false;
   
      

    
      this.forma = new FormGroup({
        nombre: new FormControl(null, Validators.required),
        apellido: new FormControl(null, Validators.required),
        dni: new FormControl(null, Validators.required),
        nacimiento: new FormControl(null, Validators.required),
        sexo: new FormControl(1, Validators.required),
        direccion: new FormControl(null, Validators.required),
        telefono: new FormControl(null, Validators.required),
        matricula: new FormControl(null, Validators.required),
        speciality: new FormControl(null, Validators.required),
        
      });
    
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

  

  addUserProfile(){

       if(this.forma.value.matricula === null){
         let body =
         {
           "patient":{
                "first_name" : this.forma.value.nombre,
                "last_name": this.forma.value.apellido,
                "identification_number": this.forma.value.dni,
                "birth_date": this.forma.value.nacimiento,
                "gender_id": this.forma.value.sexo,
                "address": this.forma.value.direccion,
                "phone": this.forma.value.telefono
           }
         };

         this._patientService.createPatient(body)
               .subscribe(resp => this.router.navigate(['/login2']));

       }else{
        let body =
        {
          "hcp":{
            "first_name": this.forma.value.nombre,
            "last_name": this.forma.value.apellido,        
            "identification_number": this.forma.value.dni,
            "register_number": this.forma.value.matricula,
            "birth_date": this.forma.value.nacimiento,
            "gender_id": this.forma.value.sexo,
            "address": this.forma.value.direccion,
            "phone": this.forma.value.telefono,
            "specialities": '['+this.speciality.id+']'
          }  
       }


       this._hcpService.createHcp(body)
            .subscribe(resp => this.router.navigate(['/login2']));


            
       

      }

  
    
  }

}
