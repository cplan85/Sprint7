import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { priceItem } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  serviceOfferings = this._formBuilder.group({
    paginaWeb: false,
    consultoriaSEO: false,
    companyaGoogleAds: false,
  });

  prices: priceItem[] = [
    { name: 'paginaWeb', priceName: 'p1', price: 500 },
    { name: 'consultoriaSEO', priceName: 'p2', price: 300 },
    { name: 'companyaGoogleAds', priceName: 'p3', price: 200 },
  ];

  public p1 = 0;
  public p2 = 0;
  public p3 = 0;

  totalCost = 0;

  // let userName = this.toppings.controls.value.consultoriaSEO;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    let selections = this.serviceOfferings.value;

    selections.paginaWeb = false;
  }

  togglePrice(item: priceItem) {
    let priceName = item.priceName;
    let itemChecked = this.serviceOfferings.value[item.name];

    itemChecked ? (this[priceName] = item.price) : (this[priceName] = 0);

    this.totalCost = this.p1 + this.p2 + this.p3;
  }
}
