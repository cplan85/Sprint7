import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from '../budget-service.service';
import { BudgetListService } from './budget-list.service';
import { budgetItem } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
})
export class BudgetListComponent {

 // clickEventsubscription: Subscription;


  constructor(
    public budgetService: BudgetServiceService,
    public budgetListService: BudgetListService
  ) {
    // this.clickEventsubscription = this.budgetService
    // .getMobileBudgetsChangeEvent()
    // .subscribe(() => {
      
    //   this.budgetsMobile = this.budgetService.budgetsMobile;

    //   console.log('changed Budgett', this.budgetService.budgetsMobile)
    // });
  }

  public budgets: budgetItem[] | null = this.budgetService.budgets;
  //budgets = this.budgetService.budgets;

  public budgetsMobile: any[] = this.budgetService.budgetsMobile;



 // budgetsMobile = this.budgets;

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

  // THIS IS SOURCE TO CHANGE
  dataSourceMobile = this.budgetsMobile;


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
