import { Injectable } from '@angular/core';
import { UsertypeConfigService } from 'src/app/config/usertype-config.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private userTypeConfig: UsertypeConfigService) { }

  menu:any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        // {titulo: 'Barra de progreso (prueba) ', url: '/progress'},
        // {titulo: 'Graficas(prueba)', url: '/graficas1'},
        {titulo: 'Mis turnos', url: '/turnos'},
        {titulo: 'Buscar Turnos', url: '/search-turn'}
      ]
    }
  ];

  
}
