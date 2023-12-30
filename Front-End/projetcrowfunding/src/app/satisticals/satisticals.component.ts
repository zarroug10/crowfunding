
import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-satisticals',
  templateUrl: './satisticals.component.html',
  styleUrls: ['./satisticals.component.css']
})
export class SatisticalsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: { min: 0 },
    },
    plugins: {
      legend: { display: true },
    },
  };

  public barChartType: ChartType = 'bar';

  public visitorChartData: ChartData<'bar'> = {
    labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
    datasets: [
      { data: [100, 150, 120, 200], label: 'Nombre de visiteurs par semaine', backgroundColor:  '#1DAA97', borderColor:  '#1DAA97' },
    ],
  };

  public chartClicked({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent; active?: object[] }): void {
    console.log(event, active);
  }

  public randomizeVisitors(): void {
    this.visitorChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }
}
