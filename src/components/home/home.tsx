import React from "react";
import Quotation from "../quotation/quotation";

export default function Home() {
  return (
    <div>
      <h4>Cotizacion de moneda: </h4>
      <h3>1 peso argentino</h3>
      <img
        height={"50vh"}
        alt={"Argentina"}
        src={"/img/map-ambit-ars.png"}
      ></img>
      <Quotation></Quotation>
    </div>
  );
}
