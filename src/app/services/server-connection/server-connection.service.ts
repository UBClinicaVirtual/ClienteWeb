import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerConfigService } from 'src/app/config/server-config.service';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  constructor(private http : HttpClient, private config : ServerConfigService) { }

  private urlPath = this.config.url();
  // private urlPath = "localhost:3200"

  private userType  = "";

  public token = "";

  public apiKey = "";

  login(){
    let httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });

    console.log({
      "access_token": this.token
    });

    //Invoco al router cabeza de google para hacer el login en google
    this.http.post("http://localhost:3000/googlerouter.php?url=http://ubclinicavirtual.000webhostapp.com/api/v1/login", {
      "access_token": this.token
    }, { headers: httpHeaders}  )
    .subscribe(
      data  => {
        console.log("POST Request is successful ", data);
        this.apiKey = data['user']['api_token'];
      },
      error  => {
        console.log("Error", error);
      }
    );
  }

  get (){

    // return this.http.get . . .
    // return this.http.get(this.urlPath + "/user", {
    //   headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer qsi0jBa0fyhgvZKY0mvcQTwvH9jAZ8bBAk1uVMn1OtEW6I8ypSenF3g3iQXu" }
    // }).toPromise();
  }

  post(){
    //toda la info para que se haga el psot
    // this.http.post ( .... )
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
    this.http.post("http://localhost:3000/googlerouter.php?url=http://ubclinicavirtual.000webhostapp.com/api/v1/user/patient/appointments", 
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
    this.http.get("http://localhost:3000/googlerouter.php?url=http://ubclinicavirtual.000webhostapp.com/api/v1/user", 
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
