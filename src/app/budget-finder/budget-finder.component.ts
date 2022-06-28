import { BudgetListService } from './../budget-list/budget-list.service';
import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from '../budget-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-budget-finder',
  templateUrl: './budget-finder.component.html',
  styleUrls: ['./budget-finder.component.scss'],
})
export class BudgetFinderComponent implements OnInit {
  budgetFinder: FormGroup;

  queryName = '';

  budgets = this.budgetService.budgets;

  searchByName = false;

  constructor(
    private _builder: FormBuilder,
    public budgetService: BudgetServiceService,
    public budgetListService: BudgetListService
  ) {
    this.budgetFinder = this._builder.group({
      queryName: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  filter() {
    let queryName = this.budgetFinder.value['queryName'];
    queryName.length > 0
      ? (this.searchByName = true)
      : (this.searchByName = false);
    this.budgetService.findByName(queryName);
    this.budgetListService.setSearchString(queryName);
  }
  clear() {
    this.searchByName = false;
    this.budgetFinder.reset();
    this.budgetService.clearSearch();
    this.budgetListService.setSearchString('');
  }
}
