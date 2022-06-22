import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BudgetServiceService } from '../budget-service.service';
import { priceItem } from '../interfaces';
import { webServiceNames } from '../interfaces';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  paginaWebForm: FormGroup;

  constructor(
    private _builder: FormBuilder,
    public budgetService: BudgetServiceService,
    public dialog: MatDialog
  ) {
    this.paginaWebForm = this._builder.group({
      numberoPaginas: ['', Validators.required],
      numeroIdiomas: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  prices = this.budgetService.prices;
  webpages = this.budgetService.webpages;
  idiomas = this.budgetService.idiomas;
  InfoPaginasDialog = InfoPaginasDialog;
  InfoIdiomasDialog = InfoIdiomasDialog;

  send(values: any) {
    console.log("Values from Panel",values);
  }

  addItem(item: priceItem) {
    this.budgetService.addWebPrices(item, this.paginaWebForm);
    //THE KEY IS HERE. MAKE SURE TO update local webpage to service webpage or idioma!
   
  }

  addPage(type: webServiceNames) {
    //HERE THERE IS DOUBLE ADDING
    this.budgetService.addPage(type);
    //type === 'webpages' ? this.budgetService.webpages++ : this.budgetService.idiomas++;
  }

  removePage(type: webServiceNames) {
    this.budgetService.removePage(type);

  }

  openDialog(component: any) {
    this.dialog.open(component);
  }
}

@Component({
  selector: 'info-paginas-dialog',
  templateUrl: 'info-paginas-dialog.html',
})
export class InfoPaginasDialog {}

@Component({
  selector: 'info-idiomas-dialog',
  templateUrl: 'info-idiomas-dialog.html',
})
export class InfoIdiomasDialog {}
