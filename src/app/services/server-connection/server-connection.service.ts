import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  constructor() { }

  private urlPath = "https://ubclinicavirtual.000webhostapp.com/api/v1";

  private meth = {post: "POST", get:"GET"};

  private userType  = "";

  private body = "";

}
