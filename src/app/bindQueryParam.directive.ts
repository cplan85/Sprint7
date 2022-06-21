import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[bindQueryParam]',
})
export class BindQueryParamDirective {
  @Input('bindQueryParam') paramKey!: string;
  function!: Function;

  constructor(private ngControl: NgControl) {}

  ngOnInit() {
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.has(this.paramKey)) {
      const value = queryParams.get(this.paramKey) as string;
      //CHECK WITH THESE URLS
      //may need to bring service here
      //http://localhost:4200/home?paginaWeb=true&consultoriaSEO=true&companyaGoogleAds=true
      //http://localhost:4200/home?paginaWeb=true&companyaGoogleAds=true
      if (value === 'true' || /^\d+$/.test(value))
        this.ngControl.control!.patchValue(queryParams.get(this.paramKey));
    }
  }
}
