import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  constructor(private http : HttpClient) { }

  private urlPath = "http://ubclinicavirtual.000webhostapp.com/api/v1";

  private meth = {post: "POST", get:"GET"};

  private userType  = "";

  public token = "";

  login(){
    return this.http.get(this.urlPath + "/user", {
      headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer qsi0jBa0fyhgvZKY0mvcQTwvH9jAZ8bBAk1uVMn1OtEW6I8ypSenF3g3iQXu" }
    }).toPromise();
  }

}
