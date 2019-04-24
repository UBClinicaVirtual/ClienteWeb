import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigService {

  constructor() { }

  private mockUrl = "localhost:3200";
  private realUrl = "http://ubclinicavirtual.000webhostapp.com/api/v1";
  private routerUrl= "http://localhost:3000/utils/router/router.php?url=http://ubclinicavirtual.000webhostapp.com/api/v1";
  private clientId = '154525363401-7rn9a462ng2ukds3pcgff8jp4uv9c9tu.apps.googleusercontent.com';
  url(){
    return this.routerUrl;
  }

  getClientID(){
    return this.clientId;
  }
}
