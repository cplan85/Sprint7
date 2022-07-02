import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BudgetServiceService } from '../budget-service.service';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-inputs',
  templateUrl: './save-inputs.component.html',
  styleUrls: ['./save-inputs.component.scss'],
})
export class SaveInputsComponent implements OnInit {
  saveInputsForm: FormGroup;

  customerName = '';
  budgetName = '';

  constructor(
    private _builder: FormBuilder,
    public budgetService: BudgetServiceService,
    private _snackBar: MatSnackBar
  ) {
    this.saveInputsForm = this._builder.group({
      budgetName: ['', Validators.required],
      customerName: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  send(values: any) {
    let budgetName = this.saveInputsForm.value['budgetName'];
    console.log(budgetName);

    let customerName = this.saveInputsForm.value['customerName'];
    console.log(customerName);

    this.budgetService.addBudgetItem(budgetName, customerName);

    this.openSnackBar(
      `Budget with name ${budgetName} has been added to your Saved Budgets`,
      'Close'
    );
  }
}
