import React from "react";

const CoinDetail = (props: IProps) => {
  const { typeMoney, price, urlIcon, urlMapAmbit } = props;

  return (
    <div
      id={"card"}
      style={{
        padding: 10,
      }}
    >
      <div
        id={"card"}
        style={{
          backgroundColor: "#82BB30",
        }}
      >
        {urlIcon && <img height={"20px"} alt={typeMoney} src={urlIcon}></img>}
        <div
          style={{
            padding: 10,
          }}
        >
          {typeMoney ? typeMoney : "-"}
        </div>
        <div
          style={{
            padding: 10,
          }}
        >
          {price ? price : "-"}
        </div>
        {urlMapAmbit && <img width={"90%"} alt={typeMoney} src={urlMapAmbit}></img>}
      </div>
    </div>
  );
};

export default CoinDetail;

interface IProps {
  typeMoney: string;
  price: string;
  urlIcon: string;
  urlMapAmbit: string;
}
