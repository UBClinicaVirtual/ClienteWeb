import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

        // Doughnut
        @Input ('chartLabels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        @Input ('chartData') doughnutChartData: MultiDataSet = [
          [350, 450, 100],
          [50, 150, 120],
          [250, 130, 70],
        ];
        @Input ('chartType') doughnutChartType: ChartType = '';
  constructor() { }

  ngOnInit() {
  }

}
