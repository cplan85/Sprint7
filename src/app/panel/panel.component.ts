import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BudgetServiceService } from '../budget-service.service';
import { priceItem } from '../interfaces';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  paginaWebForm: FormGroup;

  constructor(
    private _builder: FormBuilder,
    public budgetService: BudgetServiceService
  ) {
    this.paginaWebForm = this._builder.group({
      numberoPaginas: ['', Validators.required],
      numeroIdiomas: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  prices = this.budgetService.prices;
  webpages = this.budgetService.webpages;
  send(values: any) {
    console.log(values);
  }

  addItem(item: priceItem) {
    this.budgetService.addWebPrices(item, this.paginaWebForm);
  }
  addPage() {
    this.budgetService.addPage();
    console.log('webpages from addpage', this.webpages);
    this.webpages++;
  }
}
