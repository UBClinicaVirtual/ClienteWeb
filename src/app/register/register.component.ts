import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userTypeSelected:"";


  usertype =[
    { "id":1,
      "name":"Paciente"
    },
    { "id":2,
      "name":"Doctor"
    },
    { "id":3,
      "name":"Clinica"
    },
  ]
  forma: FormGroup;

  constructor() { }

  ngOnInit() {
   
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      dni: new FormControl(null, Validators.required),
      nacimiento: new FormControl(null, Validators.required),
      sexo: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),

 
    });
  }

  registrarUsuario(){
    console.log(this.forma.value);
  }

}