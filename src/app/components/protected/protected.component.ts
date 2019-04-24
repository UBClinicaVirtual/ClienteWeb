import { Component, OnInit } from '@angular/core';
import{AuthService} from "../../services/auth.service";
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  profile: any;

  constructor(private auth:AuthService,private loginService: LoginService) { }

  ngOnInit() {

    if (this.loginService.userProfile) {
      console.warn("si lo encontro: " +  this.loginService.userProfile);

      this.profile = this.loginService.userProfile;
    } else {
        console.warn("no encontro perfil");
        this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
      }
  }

}
