import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from '../budget-service.service';
import { BudgetListService } from './budget-list.service';
import { budgetItem } from '../interfaces';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
})
export class BudgetListComponent {
  constructor(
    public budgetService: BudgetServiceService,
    public budgetListService: BudgetListService
  ) {}

  public budgets: budgetItem[] | null = this.budgetService.budgets;
  //budgets = this.budgetService.budgets;

  budgetsMobile = this.budgetService.budgetsMobile;

  filteredBudgets = this.budgetService.filteredBudgets;

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

  deleteAllBudgets() {
    this.budgetService.clearAllBudgets();
  }
}
