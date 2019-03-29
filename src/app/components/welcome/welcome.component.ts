import { Component, OnInit } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ServerConnectionService } from 'src/app/services/server-connection/server-connection.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private connection: ServerConnectionService) { }

  ngOnInit() {
  }



}
