import React, { useState, useEffect } from "react";
import { Quotation } from "../../model/quotation";
import { QuotationService, TypeMoney } from "../../services/quotation.service";
import CoinDetail from "./coinDetail";

const Coin = (props: IProps) => {
  const typeMoney: TypeMoney = props.typeMoney;
  const [quotation, SetQuotation] = useState<Quotation>(undefined);

  useEffect(() => {
    extractQuotation();
    return () => {};
  });

  const extractQuotation = async () => {
    try {
      const quotation: Quotation = await QuotationService.getOneQuotationARS(
        typeMoney
      );
      SetQuotation(quotation);
    } catch (error) {
      SetQuotation(undefined);
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: "40px",
      }}
    >
      <CoinDetail
        typeMoney={quotation ? quotation.moneda.toString() : undefined}
        price={quotation ? quotation.precio.toString() : undefined}
        urlIcon={quotation ? QuotationService.getIconTypeMoney(quotation.moneda as TypeMoney) : undefined}
      />
    </div>
  );
};

export default Coin;

interface IProps {
  typeMoney: TypeMoney;
}
