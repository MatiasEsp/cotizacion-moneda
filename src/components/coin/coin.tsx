import React from "react";
import { Quotation } from "../../model/quotation";
import { QuotationService, TypeMoney } from "../../services/quotation.service";
import CoinDetail from "./coinDetail";

const Coin = (props: IProps) => {
  const quotation: Quotation = props.quotation;

  return (
    <div
      style={{
      }}
    >
      <CoinDetail
        typeMoney={quotation ? quotation.moneda.toString() : undefined}
        price={quotation ? quotation.precio.toString() : undefined}
        urlIcon={
          quotation
            ? QuotationService.getIconTypeMoney(quotation.moneda as TypeMoney)
            : undefined
        }
      />
    </div>
  );
};

export default Coin;

interface IProps {
  quotation: Quotation;
}
