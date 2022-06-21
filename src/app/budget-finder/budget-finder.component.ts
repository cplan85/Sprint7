import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from '../budget-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-budget-finder',
  templateUrl: './budget-finder.component.html',
  styleUrls: ['./budget-finder.component.scss']
})
export class BudgetFinderComponent implements OnInit {
  budgetFinder: FormGroup;

  queryName = '';

  constructor(
    private _builder: FormBuilder,
    public budgetService: BudgetServiceService,
  ) {
    this.budgetFinder = this._builder.group({
      queryName: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    
  }

  send(values: any) {
    console.log(values);

    let queryName = this.budgetFinder.value['queryName'];
    console.log(queryName);
    
    this.budgetService.findByName(queryName);
  }

}
