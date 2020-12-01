import React, { Component } from "react";
import { valueTypeMoney } from "../../services/quotation.service";
import Coin from "../coin/coin";

class Quotation extends Component<IProps, IState> {
  render() {
    return (
      <div className={'row'}>
        <Coin typeMoney={valueTypeMoney.DOLAR} />
        <Coin typeMoney={valueTypeMoney.EURO} />
        <Coin typeMoney={valueTypeMoney.REAL} />
      </div>
    )
  }
}

export default Quotation;

interface IProps {
}

interface IState {
}
