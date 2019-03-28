import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) {  }

  ngOnInit() {
  }

  showToken(){
    var token: string = this.auth.idtoken();
    console.log(token);
  }

}
