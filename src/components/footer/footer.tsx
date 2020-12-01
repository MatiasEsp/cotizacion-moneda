import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "#D6EAF8",
        margin: "0",
        left: 0,
        bottom: 0,
        height: "100px",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
      }}
      className={"page-footer"}
    >
      <h4>
        <p style={{ color: "#000000" }}>
          {`Copyright © - `}
          <a
            rel="stylesheet"
            href={"https://www.linkedin.com/in/matias-espinoza-09a736187/"}
            target="_blank"
          >
            Espinoza, Matias
          <img
            height={"30vh"}
            alt={"Argentina"}
            src={"/img/linkedin.png"}
          ></img>
          </a>
        </p>
      </h4>
    </div>
  );
}
