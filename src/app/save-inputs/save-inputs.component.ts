import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BudgetServiceService } from '../budget-service.service';
import { Validators } from '@angular/forms';

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
    public budgetService: BudgetServiceService
  ) {
    this.saveInputsForm = this._builder.group({
      numberoPaginas: ['', Validators.required],
      numeroIdiomas: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  send(values: any) {
    console.log(values);
  }
}