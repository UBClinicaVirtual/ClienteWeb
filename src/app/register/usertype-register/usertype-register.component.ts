import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usertype-register',
  templateUrl: './usertype-register.component.html',
  styleUrls: ['./usertype-register.component.css']
})
export class UsertypeRegisterComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
    if(this.user){
      console.log(this.user);
    }
  }

}
