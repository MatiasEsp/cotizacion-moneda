import Axios from "axios";
import { Quotation } from "../model/quotation";
import { APIs } from "./apis";

export const valueTypeMoney: { DOLAR: TypeMoney, EURO: TypeMoney, REAL: TypeMoney } = {
  DOLAR: 'dolar',
  EURO: 'euro',
  REAL: 'real',
}

export type TypeMoney = 'dolar' | 'euro' | 'real';

const getOneQuotationARS = async (chenge: TypeMoney): Promise<Quotation> => {
  const res = await Axios.get(`${APIs.QUOTATION}/${chenge}`);
  const item: any = res.data
  const quotation: Quotation = Quotation.parseItem(item);
  return quotation;
}

const getIconTypeMoney = (typeMoney: TypeMoney): string => {
  return `/img/money-${typeMoney}.png`;
}

export const QuotationService = {
  getOneQuotationARS,
  getIconTypeMoney,
}