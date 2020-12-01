export class Quotation {
  moneda: string;
  precio: number;

  constructor() {
    this.moneda = '';
    this.precio = 0;
  }

  static parseItem(data: any): Quotation {
    let quotation = new Quotation();
    quotation = { ...quotation, ...data };
    return quotation;
  }

  static parseArray(raws: any): Quotation[] {
    if (!raws || !raws.length) {
      return [];
    }
    return raws.map((raw: any) => Quotation.parseItem(raw));
  }
}