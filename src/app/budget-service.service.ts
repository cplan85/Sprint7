import { Injectable } from '@angular/core';
import { priceItem, budgetItem } from './interfaces';
import { FormGroup } from '@angular/forms';
import { webServiceNames } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class BudgetServiceService {
  prices: priceItem[] = [
    { name: 'paginaWeb', priceName: 'p1', price: 500 },
    { name: 'consultoriaSEO', priceName: 'p2', price: 300 },
    { name: 'companyaGoogleAds', priceName: 'p3', price: 200 },
    { name: 'numberoPaginas', priceName: 'p4', price: 30 },
    { name: 'numeroIdiomas', priceName: 'p4', price: 30 },
  ];

  budgets: budgetItem[] = [];

  originalBudgets: budgetItem[] = [];

  filteredBudgets: budgetItem[] = [];

  public p1 = 0;
  public p2 = 0;
  public p3 = 0;
  public p4 = 30;
  public p5 = 30;

  webpages = 0;
  idiomas = 0;

  totalCost = 0;

  searchByName = false;

  constructor() {}

  togglePrice(item: priceItem, formElement: FormGroup) {
    let priceName = item.priceName;
    let itemChecked = formElement.value[item.name];

    itemChecked ? (this[priceName] = item.price) : (this[priceName] = 0);

    this.totalCost =
      this.p1 +
      this.p2 +
      this.p3 +
      this.webpages * this.p4 +
      this.idiomas * this.p5;
  }

  addWebPrices(item: priceItem, formElement: FormGroup) {
    let itemAmount = formElement.value[item.name];
    if (itemAmount >= 0 && item.name === 'numberoPaginas') {
      this.idiomas = this.idiomas;
      this.webpages = itemAmount;
      this.totalCost =
        this.p1 +
        this.p2 +
        this.p3 +
        itemAmount * item.price +
        this.idiomas * this.p5;
    }

    if (itemAmount >= 0 && item.name === 'numeroIdiomas') {
      this.idiomas = itemAmount;
      this.webpages = this.webpages;
      this.totalCost =
        this.p1 +
        this.p2 +
        this.p3 +
        this.webpages * this.p4 +
        itemAmount * item.price;
    }
  }

  addPage(type: webServiceNames) {
    if (type === 'webpages') this.webpages++;
    if (type === 'idiomas') this.idiomas++;
    this.totalCost =
      this.p1 +
      this.p2 +
      this.p3 +
      this.webpages * this.p4 +
      this.idiomas * this.p5;
  }
  removePage(type: webServiceNames) {
    if (type === 'webpages' && this.webpages > 0) this.webpages--;
    if (type === 'idiomas' && this.idiomas > 0) this.idiomas--;

    this.totalCost =
      this.p1 +
      this.p2 +
      this.p3 +
      this.webpages * this.p4 +
      this.idiomas * this.p5;
  }

  addBudgetItem(budgetName: string, customerName: string) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    this.budgets.push({
      budgetName: budgetName,
      customerName: customerName,
      totalCost: this.totalCost,
      paginaWebQuantity: this.p1 !== 0 ? 1 : 0,
      consultoriaSEOQuantity: this.p2 !== 0 ? 1 : 0,
      companyaGoogleQuantiy: this.p3 !== 0 ? 1 : 0,
      paginasQuantity: this.webpages,
      idiomasQuantity: this.idiomas,
      date: today.toUTCString(),
      dateRaw: timeElapsed
    });

    console.log(`Budgets from Budget Services`, this.budgets);
  }

  sortAlphabetically() {
    this.originalBudgets = [...this.budgets];
    console.log(this.originalBudgets)
    return this.budgets.sort((a, b) =>
      a.budgetName.toLowerCase().localeCompare(b.budgetName.toLowerCase())
    );
  }

  sortByDate() {
    return this.budgets.sort((a, b) =>
    {return a.dateRaw-b.dateRaw }
    );
  }

  resetBudgets() {
    if (this.originalBudgets.length !==0)
   { 
  this.sortByDate()
  }
  }

  findByName(nameValue: string) {
    this.searchByName = true;
   this.filteredBudgets = this.budgets.filter(budget => budget.budgetName === nameValue);
   console.log("filtered budgets",this.filteredBudgets)
  }
}
