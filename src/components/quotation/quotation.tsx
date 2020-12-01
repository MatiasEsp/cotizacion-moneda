import React, { useEffect } from "react";
import QuotationModel from "../../model/quotation";
import { TypeMoney, valueTypeMoney } from "../../services/quotation.service";
import Coin from "../coin/coin";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as quotationActions from "../../actions/quotationAction";
import { ReducersStates } from "../../reducers/rootReducer";
import { Spinner } from "react-bootstrap";

const Quotation = (props: IProps) => {
  const {
    quotationDolar,
    quotationEuro,
    quotationReal,
    isGetLoading,
    getQuotation,
  }: IProps = props;

  useEffect(() => {
    let timeout: any;
    if (!quotationDolar && !quotationEuro && !quotationReal) {
      extractQuotation();
    } else {
      timeout = setTimeout(() => {
        extractQuotation();
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  });

  const extractQuotation = async () => {
    getQuotation(valueTypeMoney.DOLAR);
    getQuotation(valueTypeMoney.EURO);
    getQuotation(valueTypeMoney.REAL);
  };

  return (
    <div className={"container"}>
      {isGetLoading && (
        <div
        className={"fade modal show"}
          style={{
            position: "fixed",
            top: "10%",
            left: "0",
            zIndex: 1050,
            display: "block",
            paddingRight: "15px",
          }}
        >
          <Spinner animation="border" />
        </div>
      )}
      <div className={"row"}>
        <div className={"col"}>
          <Coin quotation={quotationDolar} />
        </div>
        <div className={"col"}>
          <Coin quotation={quotationEuro} />
        </div>
        <div className={"col"}>
          <Coin quotation={quotationReal} />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(rootReducerState: ReducersStates, ownProps: any) {
  return {
    quotationDolar: rootReducerState.quotationReducer.dolar,
    quotationEuro: rootReducerState.quotationReducer.euro,
    quotationReal: rootReducerState.quotationReducer.real,
    isGetLoading: rootReducerState.quotationReducer.isGetLoading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(quotationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);

interface IProps {
  quotationDolar: QuotationModel;
  quotationEuro: QuotationModel;
  quotationReal: QuotationModel;

  isGetLoading: boolean;

  getQuotation: (typeMoney: TypeMoney) => void;
}
