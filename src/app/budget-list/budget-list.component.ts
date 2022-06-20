import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from '../budget-service.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
})
export class BudgetListComponent implements OnInit {
  constructor(public budgetService: BudgetServiceService) {}

  budgets = this.budgetService.budgets;

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'pages',
    'totalCost',
  ];
  dataSource = this.budgets;
  sortAlphabetically() {
    this.budgetService.sortAlphabetically();
  }
}
