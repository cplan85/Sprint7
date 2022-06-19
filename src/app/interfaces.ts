export interface priceItem {
  name: string;
  priceName: priceNames;
  price: number;
}

type priceNames = 'p1' | 'p2' | 'p3';
