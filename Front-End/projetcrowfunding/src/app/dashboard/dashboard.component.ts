

import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
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

  public likesChartData: ChartData<'bar'> = {
    labels: ['01', '02', '03', '04', '05', '06', '07'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series likes', backgroundColor:  '#1DAA97', borderColor:  '#1DAA97' },
    ],
  };

  public financeChartData: ChartData<'bar'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      { data: [1000, 1200, 800, 1500], label: 'Series finance', backgroundColor:  '#1DAA97', borderColor:  '#1DAA97' },
    ],
  };

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomizeLikes(): void {
    this.likesChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }

  public randomizeFinance(): void {
    this.financeChartData.datasets[0].data = [
      Math.round(Math.random() * 2000),
      Math.round(Math.random() * 2000),
      Math.round(Math.random() * 2000),
      Math.round(Math.random() * 2000),
    ];

    this.chart?.update();
  }
}
