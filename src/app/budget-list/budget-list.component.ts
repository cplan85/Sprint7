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

  budgetsMobile = this.budgetService.budgetsMobile;
  

  filteredBudgets = this.budgetService.filteredBudgets;

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'sitioWeb',
    'paginasQuantity',
    'idiomas',
    'seo',
    'pages',
    'totalCost',
  ];

  displayedColumnsMobile: string[] = [
    'position',
    'name',
    'quantity',
    'subtotal',
  ];
  dataSource = this.budgets;
  dataSourceMobile = this.budgetService.budgetsMobile;

  searchByName = this.budgetService.searchByName;
  sortAlphabetically() {
    this.budgetService.sortAlphabetically();
  }

  sortByDate() {
    this.budgetService.sortByDate();
  }

  resetBudgets() {
    this.searchByName = !this.searchByName;
    this.budgetService.resetBudgets();
  }
}
