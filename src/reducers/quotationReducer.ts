import { QuotationAction } from "../actions/quotationAction";
import { SET_QUOTATION_DOLAR, SET_QUOTATION_EURO, SET_QUOTATION_REAL, SET_LOADING } from "../actions/quotationTypes";
import { Quotation } from "../model/quotation";

export interface QuotationReducerState {
  dolar?: Quotation;
  euro?: Quotation;
  real?: Quotation;
  isGetLoading: boolean;
}

const initialState = {
  isGetLoading: false,
}

export default function quotationReducer(state: QuotationReducerState = initialState, action) {
  switch (action.type) {
    case SET_QUOTATION_DOLAR:
      return setQuotationDolar(state, action);

    case SET_QUOTATION_EURO:
      return setQuotationEuro(state, action);

    case SET_QUOTATION_REAL:
      return setQuotationReal(state, action);

    case SET_LOADING:
      return setLoading(state);

    default:
      return state;
  }
}

function setQuotationDolar(state: QuotationReducerState, action: QuotationAction): QuotationReducerState {
  return {
    ...state,
    dolar: action.payload.quotation,
    isGetLoading: false,
  };
}
function setQuotationEuro(state: QuotationReducerState, action: QuotationAction): QuotationReducerState {
  return {
    ...state,
    dolar: action.payload.quotation,
    isGetLoading: false,
  };
}
function setQuotationReal(state: QuotationReducerState, action: QuotationAction): QuotationReducerState {
  return {
    ...state,
    dolar: action.payload.quotation,
    isGetLoading: false,
  };
}
function setLoading(state: QuotationReducerState): QuotationReducerState {
  return {
    ...state,
    isGetLoading: true,
  };
}
