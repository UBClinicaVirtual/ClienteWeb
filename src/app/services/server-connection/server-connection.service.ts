import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerConfigService } from 'src/app/config/server-config.service';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  constructor(private http: HttpClient, private config: ServerConfigService) { }

  private urlPath = this.config.url();
  // private urlPath = "localhost:3200"

  public userType : any;

  public token = '';

  public apiKey = false;

  get (){

  }
  post(uri:string, httpHeaders:HttpHeaders,body, service:serviceNotifyInterface){

    if(localStorage.getItem('token')){
      httpHeaders = new HttpHeaders({
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
      });
    }


    this.http.post
    (
      this.urlPath + uri,
      body,
      { headers: httpHeaders}
    )
    .subscribe(
      data  => {
        service.notifty(data);
      },
      error  => {
        console.log('Error', error);
      }
    );
  }


  onClickButton(){

    let httpHeaders = new HttpHeaders({
      /*
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
      */
     'Access-Control-Allow-Origin':'*'
  });

    //aca llamaba directamente a 'http://ubclinicavirtual.000webhostapp.com/api/v1/login2'
    //Ahora llamo al router para que el llame a 'http://ubclinicavirtual.000webhostapp.com/api/v1/login2'
    
    this.http.post("http://localhost:3000/mirouter.php", "", { headers: httpHeaders}  )
    .subscribe(
      data  => {
        console.log("POST Request is successful ", data);
      },
      error  => {
        console.log("Error", error);
      }
    );
  }

  appointments(){

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      //Fuerzo que traiga el del usuario que tiene api_token paciente
      'Authorization' : 'Bearer ' + this.apiKey,
      'Access-Control-Allow-Origin':'*'
    });

    //Invoco al router cabeza para hacer pedir los turnos
    this.http.post(this.urlPath + "/user/patient/appointments", 
    //Aca va el body del requerimiento
    {
      
    }, 
    //Aca van los headers del requerimiento
    { headers: httpHeaders })
    .subscribe(
      data  => {
        console.log("POST Request Appointments is successful ", data);        
      },
      error  => {      
        console.log("Error", error);      
      }      
    );
  } 



  userdata(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ' + this.apiKey,
      'Access-Control-Allow-Origin':'*'
    });

    //Invoco al router cabeza para pedir los datos del usuario
    this.http.get(this.urlPath + "/user", 
    //Aca van los headers del requerimiento
    { headers: httpHeaders}  )
    .subscribe(
        data  => {
          console.log("User GET Request is successful ", data);
        },
        error  => {
          console.log("Error", error);
        }
    );
  }

  request(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ' + this.apiKey,
      'Access-Control-Allow-Origin':'*'
    });

    //Invoco al router cabeza para pedir los datos del usuario
    this.http.post(this.urlPath + "/hcp/search",
    {},
    //Aca van los headers del requerimiento
    { headers: httpHeaders}  )
    .subscribe(
        data  => {
          console.log("User GET Request is successful ", data);
        },
        error  => {
          console.log("Error", error);
        }
    );
  }
}
