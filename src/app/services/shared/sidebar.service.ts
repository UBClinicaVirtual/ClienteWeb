import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: 'Turnos',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'Mis turnos', url: '/turnos'},
        {titulo: 'Buscar Turnos', url: '/search-turn'},
        
      ]
    },
    {
      titulo: 'Especialidades',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Ver/Modificar/Crear', url: '/specialities'},
      ]
    },
    {
      titulo: 'Clinicas',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Ver Clinicas', url: '/clinics'},
      ]
    }

  ];

  constructor() { }
}
