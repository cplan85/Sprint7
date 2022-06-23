import { Component, Input, ViewChild } from '@angular/core';

import { ChartComponent } from 'ng-apexcharts';

import { BudgetServiceService } from '../budget-service.service';

import { Subscription } from 'rxjs';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() colors: string[] = [
    '#3f51b5',
    '#f44336',
    '#ff4081',
    '#6270c4',
    '#95a1e5',
  ];

  showPieChart = false;

  clickEventsubscription: Subscription;

  constructor(public budgetService: BudgetServiceService) {
    this.chartOptions = {
      series: [0, 0, 0, 0, 0],
      chart: {
        type: 'donut',
      },
      labels: [
        'Pagina Web',
        'Consultoria SEO',
        'Companya GoogleAD',
        'Numero de Paginas',
        'Numero de Idiomas',
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.clickEventsubscription = this.budgetService
      .getClickEvent()
      .subscribe(() => {
        this.updateSeries();
      });
  }

  togglePieChart() {
    this.showPieChart = !this.showPieChart;
    this.updateSeries();
  }

  public updateSeries() {
    this.chartOptions.series = [
      this.budgetService.p1,
      this.budgetService.p2,
      this.budgetService.p3,
      this.budgetService.p4 * this.budgetService.webpages,
      this.budgetService.p5 * this.budgetService.idiomas,
    ];
  }
}
