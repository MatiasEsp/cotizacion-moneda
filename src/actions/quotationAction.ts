import { Quotation } from "../model/quotation";
import { QuotationService, TypeMoney, valueTypeMoney } from "../services/quotation.service";
import { Action } from "./action.interface";
import { SET_QUOTATION_DOLAR, SET_QUOTATION_EURO, SET_QUOTATION_REAL, SET_LOADING } from "./quotationTypes";

export interface QuotationAction extends Action {
  payload: { quotation: Quotation };
}

const setLoadingGetQuotation = () => ({
  type: SET_LOADING,
})

function setQuotationDolar(quotation: Quotation): QuotationAction {
  return { type: SET_QUOTATION_DOLAR, payload: { quotation } };
}
function setQuotationEuro(quotation: Quotation): QuotationAction {
  return { type: SET_QUOTATION_EURO, payload: { quotation } };
}
function setQuotationReal(quotation: Quotation): QuotationAction {
  return { type: SET_QUOTATION_REAL, payload: { quotation } };
}

export const getQuotation = (typeMoney: TypeMoney) => {
  return async (dispatch: any, getState: any) => {
    try {
      dispatch(setLoadingGetQuotation());
      const quotation: Quotation = await QuotationService.getOneQuotationARS(typeMoney);
      switch (typeMoney) {
        case valueTypeMoney.DOLAR:
          dispatch(setQuotationDolar(quotation));
          break;
        case valueTypeMoney.EURO:
          dispatch(setQuotationEuro(quotation));
          break;
        case valueTypeMoney.REAL:
          dispatch(setQuotationReal(quotation));
          break;
        default:
          break;
      }
    } catch (error) {
    }
  };
}
