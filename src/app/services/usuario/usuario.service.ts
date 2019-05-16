import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router:Router
  ) {
    this.cargarStorage();
   }

   estaLogueado(){
     return(this.token.length > 5)? true: false;
   }

   cargarStorage(){
     if(localStorage.getItem('token')){
       this.token = localStorage.getItem('token');
       
     }else{
       this.token = '';
     }
   }

   guardarStorage(token:string){

    localStorage.setItem('token',token);

    this.token = token;


   }

   logout(){
    
    this.token='';
    localStorage.removeItem('token');
  
    this.router.navigate(['./login2']);

    
  }

}

