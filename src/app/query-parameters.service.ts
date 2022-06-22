import { Injectable } from '@angular/core';
import { BudgetServiceService } from './budget-service.service';

@Injectable({
  providedIn: 'root',
})
export class QueryParametersService {
  queryParameters = {
    paginaWeb: false,
    consultoriaSEO: false,
    companyaGoogleAds: false,
    numberoPaginas: 0,
    numeroIdiomas: 0,
  };

  constructor(public budgetService: BudgetServiceService) {}

  changeQueryParameters() {
    this.queryParameters.paginaWeb =
      this.budgetService.p1 === 500 ? true : false;
    this.queryParameters.consultoriaSEO =
      this.budgetService.p2 === 300 ? true : false;
    this.queryParameters.companyaGoogleAds =
      this.budgetService.p3 === 200 ? true : false;
    this.queryParameters.numberoPaginas = this.budgetService.webpages;
    this.queryParameters.numeroIdiomas = this.budgetService.idiomas;
  }
}
