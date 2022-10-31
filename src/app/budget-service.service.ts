import { Injectable } from '@angular/core';
import { priceItem, budgetItem } from './interfaces';
import { FormGroup } from '@angular/forms';
import { webServiceNames } from './interfaces';
import { Observable, Subject } from 'rxjs';
import { WebStorageService } from './services/web-storage.service';

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

  private subject = new Subject<any>();

  private subject2 = new Subject<any>();

  private mobileBudgetsSubject = new Subject<any>();

  sendClickEvent() {
    this.subject.next(this.p1);
  }

  sendPageChangeEvent() {
    this.subject2.next(this.webpages);
  }

  // sendMobileBudgetChangEvent() {
  //   this.mobileBudgetsSubject.next(this.budgetsMobile);
  // }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  getPageChangeEvent(): Observable<any> {
    return this.subject2.asObservable();
  }

  // getMobileBudgetsChangeEvent(): Observable<any> {
  //   return this.mobileBudgetsSubject.asObservable();
  // }


  localStorageBudgets = this.webstorageService.get('budgets');

  budgets: budgetItem[] = JSON.parse(
    this.localStorageBudgets == null ? '[]' : this.localStorageBudgets
  );

  budgetsMobile: any[] = [];

  originalBudgets: budgetItem[] = JSON.parse(
    this.localStorageBudgets == null ? '[]' : this.localStorageBudgets
  );

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

  constructor(public webstorageService: WebStorageService) {}

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

   //   console.log('TOTAL COST - PAGINAS from ParamWebPrices', this.totalCost);
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

   //   console.log('TOTAL COST - IDIOMAS from ParamWebPrices', this.totalCost);
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

   /* this.budgets.forEach(budget => {
      this.budgetsMobile.push(
      [  {
        name: 'Web Site', quantity: budget.paginaWebQuantity, cost: 500, subtotal: budget.paginaWebQuantity * 500 
      },
      {
        name: 'Web Pages', quantity: budget.paginasQuantity, cost: 30, subtotal: budget.paginasQuantity * 30 
      },
      {
        name: 'Idiomas', quantity: budget.idiomasQuantity, cost: 30, subtotal: budget.idiomasQuantity * 30 
      },
      {
        name: 'SEO', quantity: budget.consultoriaSEOQuantity, cost: 300, subtotal: budget.consultoriaSEOQuantity * 300 
      },
      {
        name: 'Google Ads', quantity: budget.companyaGoogleQuantiy, cost: 200, subtotal: budget.companyaGoogleQuantiy * 200 
      },
      {
        name: 'TOTAL', quantity: '', cost: '', subtotal: budget.totalCost
      },
    ]
      
      )
    });*/

    this.webstorageService.set('budgets', JSON.stringify(this.budgets));
    let savedBudgets = this.webstorageService.get('budgets');

    this.originalBudgets.splice(0, this.budgets.length);
    this.originalBudgets.push(...this.budgets);

//this.sendMobileBudgetChangEvent()
  }

  clearAllBudgets() {
    this.budgets.splice(0, this.budgets.length);
    this.webstorageService.set('budgets', '[]');

    this.originalBudgets.splice(0, this.originalBudgets.length);
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
  }

  findByName(nameValue: string) {
    let filteredItem = this.budgets.filter((budget) =>
      budget.budgetName.toLowerCase().includes(nameValue.toLowerCase())
    );

    this.budgets.splice(0, this.budgets.length);
    nameValue.length > 0
      ? this.budgets.push(...filteredItem)
      : this.budgets.push(...this.originalBudgets);
  }

  clearSearch() {
    this.budgets.splice(0, this.budgets.length);
    this.budgets.push(...this.originalBudgets);
  }
}
