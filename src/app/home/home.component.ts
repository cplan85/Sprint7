import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { priceItem } from '../interfaces';
import { BudgetServiceService } from '../budget-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [BudgetServiceService],
})
export class HomeComponent implements OnInit {
  serviceOfferings = this._formBuilder.group({
    paginaWeb: false,
    consultoriaSEO: false,
    companyaGoogleAds: false,
  });

  constructor(
    private _formBuilder: FormBuilder,
    public budgetService: BudgetServiceService
  ) {}

  webpages = this.budgetService.webpages;
  prices = this.budgetService.prices;
  ngOnInit(): void {}

  togglePrice(item: priceItem) {
    this.budgetService.togglePrice(item, this.serviceOfferings);
  }
}
