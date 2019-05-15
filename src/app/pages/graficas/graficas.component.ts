import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: []
})
export class GraficasComponent implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Fiebre', 'Gastritis', 'Gripe'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'Diagnosticos mas frecuentes'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Pacientes '
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿se automedican antes de visitar al medico?'
    },
    'grafico4': {
      'labels': ['sin', 'con'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Pacientes con cobertura?'
    },
  };

  ngOnInit() {
  }

}
