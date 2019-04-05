import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigService {

  constructor() { }

  private mockUrl = "localhost:4200";
  private realUrl = "http://ubclinicavirtual.000webhostapp.com/api/v1";

  url(){
    return this.mockUrl;
  }
}
