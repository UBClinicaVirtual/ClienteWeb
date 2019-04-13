import { Component} from '@angular/core';
import { GlobalesService } from './services/globales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ClienteWeb';

  constructor(private globales: GlobalesService){

  }

  ifNavBar(){
    return this.globales.getNavbar();
  }
}
