import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userTypeSelected:any = null;


  usertype =[
    { "id":1,
      "name":"PACIENTE",
      "class":"dark",
      "img":"patient"
    },
    { "id":2,
      "name":"DOCTOR",
      "class":"info",
      "img":"hcp"
    },

/*     { "id":3,
      "name":"CLINICA",
      "class":"success",
      "img":"clinic"
    }, */
  ]
  

  constructor() { }

  ngOnInit() {
   
    init_plugins();

 
  }

  registrarUsuario(){
   // console.log(this.forma.value);
  }

  addUserType(type){
    this.userTypeSelected = type;
  }

}
