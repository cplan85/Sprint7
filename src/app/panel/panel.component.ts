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
    console.log(values);
  }

  addItem(item: priceItem) {
    this.budgetService.addWebPrices(item, this.paginaWebForm);
    //THE KEY IS HERE. MAKE SURE TO update local webpage to service webpage or idioma!
    this.webpages = this.budgetService.webpages;
    this.idiomas = this.budgetService.idiomas;
  }

  addPage(type: webServiceNames) {
    this.budgetService.addPage(type);
    type === 'webpages' ? this.webpages++ : this.idiomas++;
  }

  removePage(type: webServiceNames) {
    this.budgetService.removePage(type);
    if (type === 'webpages' && this.webpages > 0) {
      this.webpages--;
    }
    if (type === 'idiomas' && this.idiomas > 0) {
      this.idiomas--;
    }
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
