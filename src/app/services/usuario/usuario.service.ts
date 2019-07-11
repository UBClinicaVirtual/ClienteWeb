import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { UsuarioGoogle } from 'src/app/models/usuarioGoogle.model';
import { LogoutService } from '../server-connection/requests/logout/logout.service';
import swal from 'sweetalert';
import { Hcps } from 'src/app/models/hcp.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements componentResponseInterface {
  response(data: any) {
    //console.log(data['msg']);
    swal('Sesion Finalizada',data['msg'], 'success');
    this.router.navigate(['./login2']);
  }

  token: string;
  estado: string;
  usuario: Usuario;
  usuarioGoogle: UsuarioGoogle;
  paciente: Patient;
  hcp: Hcps;

  constructor(
    public http: HttpClient,
    public router:Router,
    private loggout: LogoutService
  ) {
    this.cargarStorage();
   }

   estaLogueado(){
     
     return(this.token.length > 5 && this.estado.length > 5 )? true: false;
   }

   cargarStorage(){
     if(localStorage.getItem('token') && localStorage.getItem('estado')){
       this.token = localStorage.getItem('token');
       this.estado = localStorage.getItem('estado');
       this.usuario = JSON.parse(localStorage.getItem('usuario'));
       this.usuarioGoogle = JSON.parse(localStorage.getItem('usuarioGoogle'));
       this.paciente = JSON.parse(localStorage.getItem('paciente'));
       this.hcp = JSON.parse(localStorage.getItem('medico'));

       
     }else{
       this.token = '';
       this.estado = '';
       this.usuario = null;
       this.usuarioGoogle= null;
       this.paciente=null;
       this.hcp = null;
     }
   }

   guardarStorage(token:string, estado:string){

    localStorage.setItem('token',token);
    localStorage.setItem('estado', estado);

  
    this.token = token;
    this.estado = estado;
 

   }

   guardarGoogle( email:string, name:string, image:string , idToken:string){

    
     this.usuarioGoogle = new UsuarioGoogle(name,image,email,idToken);

     localStorage.setItem('usuarioGoogle', JSON.stringify(this.usuarioGoogle));
     

   }

   guardarPaciente(paciente:Patient){

    this.paciente = paciente;

    localStorage.setItem('paciente', JSON.stringify(this.paciente));
    

   }

   guardarHcp(hcp:Hcps){
     this.hcp = hcp;

     localStorage.setItem('medico',JSON.stringify(this.hcp));

   }

   logout(){
     
     this.loggout.execute(this,"");
    this.token='';
    this.estado='';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('estado');
    localStorage.removeItem('usuario');
    localStorage.removeItem('usuarioGoogle');
    localStorage.removeItem('paciente');
    localStorage.removeItem('medico');

    

  
    //this.router.navigate(['./login2']);

    
  }

}

