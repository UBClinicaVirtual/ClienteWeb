import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  estado: string;

  constructor(
    public http: HttpClient,
    public router:Router
  ) {
    this.cargarStorage();
   }

   estaLogueado(){
     return(this.token.length > 5 && this.estado.length > 5 )? true: false;
   }

   cargarStorage(){
     if(localStorage.getItem('token')){
       this.token = localStorage.getItem('token');
       this.estado = localStorage.getItem('estado');
       
     }else{
       this.token = '';
       this.estado = '';
     }
   }

   guardarStorage(token:string, estado:string){

    localStorage.setItem('token',token);
    localStorage.setItem('estado', estado);

    this.token = token;
    this.estado = estado;


   }

   logout(){
    
    this.token='';
    this.estado='';
    localStorage.removeItem('token');
    localStorage.removeItem('estado');

  
    this.router.navigate(['./login2']);

    
  }

}

