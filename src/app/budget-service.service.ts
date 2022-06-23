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

  budgetsMobile: any[] =[];

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

  public searchByName = false;

  constructor() {}

  calcPrice() {
    this.totalCost =
      this.p1 +
      this.p2 +
      this.p3 +
      this.webpages * this.p4 +
      this.idiomas * this.p5;
  }

  togglePrice(item: priceItem, formElement: FormGroup) {
    let priceName = item.priceName;
    let itemChecked = formElement.value[item.name];

    itemChecked ? (this[priceName] = item.price) : (this[priceName] = 0);

    this.calcPrice();

    //IF Web pages is not clicked then subcategories remain Zero
    if (!itemChecked && item.name === 'paginaWeb') {
      this.webpages = 0;
      this.idiomas = 0;
    }
  }

  toggleParamPrice(item: priceItem) {
    let priceName = item.priceName;
    this[priceName] = item.price;
    this.calcPrice();
    //IF Web pages is not clicked then subcategories remain Zero
  }

  addParamWebPrices(item: priceItem, quantityValue: string) {
    let itemAmount = parseInt(quantityValue);
    if (itemAmount >= 0 && item.name === 'numberoPaginas') {
      this.idiomas = this.idiomas;
      this.webpages = itemAmount;
      this.totalCost =
        this.p1 +
        this.p2 +
        this.p3 +
        itemAmount * item.price +
        this.idiomas * this.p5;

      console.log('TOTAL COST - PAGINAS from ParamWebPrices', this.totalCost);
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

      console.log('TOTAL COST - IDIOMAS from ParamWebPrices', this.totalCost);
    }
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
    this.calcPrice();
  }
  removePage(type: webServiceNames) {
    if (type === 'webpages' && this.webpages > 0) this.webpages--;
    if (type === 'idiomas' && this.idiomas > 0) this.idiomas--;
    this.calcPrice();
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
      dateRaw: timeElapsed,
    });

    this.budgetsMobile.push(
      [{position: 1, name: 'Pagina Web', quantity: this.p1 !== 0 ? 1 : 0, subtotal: (this.p1 !== 0 ? 1 : 0) * this.p1 },
      {position: 2, name: '# Paginas', quantity: this.webpages, subtotal: (this.webpages * this.p4) },
      {position: 3, name: '# Idiomas', quantity: this.idiomas, subtotal: (this.idiomas * this.p5) },
      {position: 4, name: 'Consultoria SEO', quantity: this.p2 !== 0 ? 1 : 0, subtotal: `${(this.p2 !== 0 ? 1 : 0) * this.p2} ` },
      {position: 5, name: 'Companya Google', quantity: this.p3 !== 0 ? 1 : 0, subtotal: (this.p3 !== 0 ? 1 : 0) * this.p3 },
      {position: 6, name: 'Total', quantity: "", subtotal: this.totalCost }, ] 
    )
      console.log("budgetsMobile ",this.budgetsMobile)
  }

  sortAlphabetically() {
    this.originalBudgets = [...this.budgets];
    console.log(this.originalBudgets);
    return this.budgets.sort((a, b) =>
      a.budgetName.toLowerCase().localeCompare(b.budgetName.toLowerCase())
    );
  }

  sortByDate() {
    return this.budgets.sort((a, b) => {
      return a.dateRaw - b.dateRaw;
    });
  }

  resetBudgets() {
    if (this.originalBudgets.length !== 0) {
      this.searchByName = false;
      this.budgets.splice(0, this.budgets.length);
      this.budgets.push(...this.originalBudgets);
    }
    console.log(`SEARCH BY NAME FROM SERVICE`, this.searchByName);
  }

  findByName(nameValue: string) {
    this.originalBudgets.splice(0, this.budgets.length);
    this.originalBudgets.push(...this.budgets);
    this.searchByName = true;
    let filteredItem = this.budgets.filter(
      (budget) => budget.budgetName === nameValue
    );

    this.budgets.splice(0, this.budgets.length);
    this.budgets.push(...filteredItem);
  }
}
