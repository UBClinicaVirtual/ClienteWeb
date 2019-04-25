import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService implements OnInit  {

  navbarVisibility: boolean = false;

  ngOnInit(){
    this.navbarVisibility = false;
  }

  constructor() { }

  getNavbar(){
    return this.navbarVisibility;
  }

  reverNavBar(){
    this.navbarVisibility = !this.navbarVisibility;
  }
}
