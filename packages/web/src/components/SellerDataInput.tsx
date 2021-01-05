import { Wrapper } from "../sharedCompnents/Wrapper";
import { Context } from "../sharedCompnents/Context";
import { Container } from "../sharedCompnents/Container";
import React from "react";
import { SellerReg } from "./SellerRegistration";
import { CenterReg } from "./CenterRegistration";

const SellerDataInput = () => {
  return (
    <Wrapper
      style={{
        flexDirection: "row",
        justifyItems: "center",
        height: "100vh",
      }}
    >
      <Container
        style={{ backgroundColor: "blue", width: "6vw", height: "1030px" }}
      ></Container>
      <Context
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "250px",
          width: "100%",
          height: "100vh",
        }}
      >
        <SellerReg />
        <CenterReg />
      </Context>
    </Wrapper>
  );
};

export default SellerDataInput;
