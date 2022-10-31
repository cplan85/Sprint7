import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { priceItem } from '../interfaces';
import { BudgetServiceService } from '../budget-service.service';
import { QueryParametersService } from '../query-parameters.service';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [BudgetServiceService, QueryParametersService],
})
export class HomeComponent implements OnInit {
  serviceOfferings = this._formBuilder.group({
    paginaWeb: false,
    consultoriaSEO: false,
    companyaGoogleAds: false,
  });

  clickEventsubscription: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public budgetService: BudgetServiceService,
    public queryP: QueryParametersService
  ) {
    this.clickEventsubscription = this.budgetService
      .getPageChangeEvent()
      .subscribe(() => {
        this.budgetService.calcPrice();
        console.log('subscribe total cost', this.budgetService.totalCost);
      });
  }

  webpages = this.budgetService.webpages;
  prices = this.budgetService.prices;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
    //  console.log('Query Params:', queryParams);
    });
    this.activatedRoute.params.subscribe((params) => {
    //  console.log('Regular Params:', params);
    });
  }

  togglePrice(item: priceItem) {
    this.budgetService.togglePrice(item, this.serviceOfferings);
    this.queryP.changeQueryParameters();
    this.budgetService.sendClickEvent();
  }
}
