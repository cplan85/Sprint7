import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BudgetServiceService } from './budget-service.service';

@Directive({
  selector: '[bindQueryParam]',
})
export class BindQueryParamDirective {
  @Input('bindQueryParam') paramKey!: string;
  function!: Function;

  public totalCost = this.budgetService.totalCost;
 

  constructor(private ngControl: NgControl,
    public budgetService: BudgetServiceService
    ) {}

  ngOnInit() {
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.has(this.paramKey)) {
      const value = queryParams.get(this.paramKey) as string;
      //CHECK WITH THESE URLS
      //http://localhost:4200/home?paginaWeb=true&consultoriaSEO=true&companyaGoogleAds=true
      //http://localhost:4200/home?paginaWeb=true&companyaGoogleAds=true
      //http://localhost:4200/home?paginaWeb=true&consultoriaSEO=true&numberoPaginas=11&companyaGoogleAds=true&numeroIdiomas=15
      if (value === 'true')
       { this.ngControl.control!.patchValue(queryParams.get(this.paramKey));
        return this.budgetService.prices.forEach((price) => {
          if (price.name == this.paramKey) {
            this.budgetService.toggleParamPrice(price);
          }
        })
  
      } if ( /^\d+$/.test(value)) {
        console.log("if Number statement", value, this.paramKey)
        this.ngControl.control!.patchValue(queryParams.get(this.paramKey));
        return this.budgetService.prices.forEach((price) => {
          
          if (price.name == this.paramKey) {
      
           return this.budgetService.addParamWebPrices(price, value);
          }
        })
      }
    }
  }
}
