import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/server-connection/requests/login/login.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  profile: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.profile = this.loginService.userProfile;

    // if (this.loginService.userProfile) {

    //   this.profile = this.loginService.userProfile;
    // } else {
    //     console.warn("no encontro perfil");
    //     this.auth.getProfile((err, profile) => {
    //     this.profile = profile;
    //   });
    //   }
  }

  usertype(type){
    switch (type) {
      case '0':
          return "Sin Perfil";   
          break;
      case '1':
          return "Paciente";
          break;
      case '2':
          return "Doctor";
          break;
      case '3':
          return "Clinica";
          break;
      default:
          return "No asignado";
          break;
    }
  }

  noteditable='readonly';

  user = {
    "user": {
        "id": 6,
        "email": "ubelarga@gmail.com",
        "created_at": "2018-09-20 17:30:52",
        "updated_at": "2018-09-27 15:06:20",
        "api_token": "HoFcCOSgtjyfD5GELBuyQ3xHZasPiBSyqGsFeDsYLXj4BewYcIEOvyqAn0iZ",
        "active": 1,
        "user_type_id": "2"
    },
	"patient":{
		"id": 6,
		"first_name": "walter",
		"last_name": "ub",        
		"created_at": "2018-09-20 17:30:52",
		"updated_at": "2018-09-27 15:06:20",
		"identification_number": "0303456",
		"birth_date": "1987-01-01",
		"gender_id": 0,
		"address": "Street 1234",
		"phone": "1234-4758"
	},
	"hcp":{
		"id": 6,
		"first_name": "MD. walter",
		"last_name": "ub",        
		"created_at": "2018-09-20 17:30:52",
		"updated_at": "2018-09-27 15:06:20",
		"identification_number": "0303456",
		"register_number": "RG3685",
		"birth_date": "1987-01-01",
		"gender_id": 0,
		"address": "Street 1234",
		"phone": "1234-4758",
		"specialities": [ {"id": 1, "name": "Guardia"} ]
	},
	"clinic":{
		"id": 6,
		"created_at": "2018-09-20 17:30:52",
		"updated_at": "2018-09-27 15:06:20",		
		"business_name": "Clinica San Martin",
		"business_number": "2003034567",		
		"address": "Street 1234",
		"phone": "1234-4758",
		"hcp_specialities": [ {"id": 44, "hcp_id": 33, "speciality_id": 12}],
		"hcps": [ {"id": 33, "first_name": "Dr. Juan", "last_name": "Perez"} ],
		"specialities": [ {"id": 12, "name": "Guardia"} ]
	}
	
}

}
