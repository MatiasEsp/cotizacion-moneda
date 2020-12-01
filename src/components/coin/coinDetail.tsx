import React from "react";

const CoinDetail = (props: IProps) => {
  const { typeMoney, price, urlIcon } = props;

  return (
    <div
      id={"card"}
      style={{
        backgroundColor: "#fff000",
      }}
    >
      {urlIcon && <img height={'20px'} src={urlIcon}></img>}
      <div>{typeMoney ? typeMoney : "-"}</div>
      <div>{price ? price : "-"}</div>
    </div>
  );
};

export default CoinDetail;

interface IProps {
  typeMoney: string;
  price: string;
  urlIcon: string;
}
