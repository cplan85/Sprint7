import { Injectable } from '@angular/core';
import { BudgetServiceService } from '../budget-service.service';
import { budgetItem } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BudgetListService {
  constructor(public budgetService: BudgetServiceService) {}

  public async getAll(): Promise<budgetItem[]> {
    return this.budgetService.budgets;
  }

  public async filter(text: string): Promise<budgetItem[]> {
    return this.budgetService.budgets.filter((budget) =>
      budget.budgetName.toLowerCase().includes(text.toLowerCase())
    );
  }
}
