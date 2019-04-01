import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  constructor(private http : HttpClient) { }

  private urlPath = "https://ubclinicavirtual.000webhostapp.com/api/v1";

  private meth = {post: "POST", get:"GET"};

  private userType  = "";

  public token = "";

  login(){
    return this.http.post(this.urlPath, {
      "access_token": this.token
    }, {
      headers: { "Accept": "application/json", "Content-Type": "application/json" }
    }).toPromise();
  }

}
