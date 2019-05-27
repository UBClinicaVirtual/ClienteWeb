import { Component, OnInit, Input } from '@angular/core';
import { GetSpecialitiesService } from 'src/app/services/server-connection/requests/specialities/get-specialities.service';

@Component({
  selector: 'app-usertype-register',
  templateUrl: './usertype-register.component.html',
  styleUrls: ['./usertype-register.component.css']
})
export class UsertypeRegisterComponent implements OnInit, componentResponseInterface {
  response(data: any) {
    throw new Error("Method not implemented.");
  }

  @Input() user: any;

  constructor(private specialities : GetSpecialitiesService) { }

  ngOnInit() {
    if(this.user){
      console.log(this.user);
    }

    this.specialities.execute(this);
  }

}
