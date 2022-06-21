export interface priceItem {
  name: string;
  priceName: priceNames;
  price: number;
}

export interface budgetItem {
  budgetName: string;
  customerName: string;
  totalCost: number;
  paginaWebQuantity: number;
  consultoriaSEOQuantity: number;
  companyaGoogleQuantiy: number;
  paginasQuantity: number;
  idiomasQuantity: number;
  date: string;
  dateRaw: number;
}

type priceNames = 'p1' | 'p2' | 'p3' | 'p4' | 'p5';

export type webServiceNames = 'webpages' | 'idiomas';
