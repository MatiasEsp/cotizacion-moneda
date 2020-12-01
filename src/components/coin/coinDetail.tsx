import React from "react";

const CoinDetail = (props: IProps) => {
  const { typeMoney, price, urlIcon, urlMapAmbit } = props;

  return (
      <div
        style={{
          backgroundColor: "#D5F5E3",
          marginTop: 30,
          paddingTop: 30,
          paddingBottom: 60,
          borderRadius: 30,
        }}
      >
        {urlIcon && <img height={"20px"} alt={typeMoney} src={urlIcon}></img>}
        <div
          style={{
            padding: 10,
          }}
        >
          {typeMoney ? typeMoney.toUpperCase() : "-"}
        </div>
        <div
          style={{
            padding: 10,
          }}
        >
          {urlIcon && <img height={"15px"} alt={typeMoney} src={urlIcon}></img>} {price ? price : "-"}
        </div>
        {urlMapAmbit && <img width={"90%"} alt={typeMoney} src={urlMapAmbit}></img>}
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
