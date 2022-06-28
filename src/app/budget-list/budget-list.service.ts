import { Injectable } from '@angular/core';
import { BudgetServiceService } from '../budget-service.service';
import { budgetItem } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BudgetListService {
  public searchString = '';

  setSearchString(value: string) {
    this.searchString = value;
  }

  public getSearchString(): string {
    return this.searchString;
  }
  constructor(public budgetService: BudgetServiceService) {}
}
