import { Component, OnInit, Input } from '@angular/core';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';

@Component({
  selector: 'app-usertype-register',
  templateUrl: './usertype-register.component.html',
  styleUrls: ['./usertype-register.component.css']
})
export class UsertypeRegisterComponent implements OnInit, componentResponseInterface {
  response(data: any) {
    console.log(data);
    this.specialities = data.specialities;
  }

  @Input() user: any;

  specialities;
  specialities_chosen = [];

  constructor(private getSpecialitiesService : GetSpecialitiesService) { }

  ngOnInit() {
    if(this.user){
      console.log(this.user);
    }

    this.getSpecialitiesService.execute(this);
  }

  specialitieChoosed(id){
    let specChoosed = document.getElementById(id);
    specChoosed.hidden = "hidden";
    this.specialities_chosen.push(specChoosed.value);
    console.log(this.specialities_chosen);
  }

}
