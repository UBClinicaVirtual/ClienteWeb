import { Component, OnInit, Input } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})



export class LoadingComponent implements OnInit {

  @Input() info: {
    state : boolean,
    msg   : string
  };

  constructor() {

  }

  ngOnInit() {}

}
