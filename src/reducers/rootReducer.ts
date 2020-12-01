import { combineReducers } from 'redux';
import quotationReducer, { QuotationReducerState } from './quotationReducer';

export interface ReducersStates {
  quotationReducer: QuotationReducerState;
}

export default combineReducers<ReducersStates>({
  quotationReducer
});
