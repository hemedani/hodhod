import React from "react";
import { Context } from "../sharedCompnents/Context";
import { FormContainer } from "../sharedCompnents/FormContainer";
import { Logo } from "../sharedCompnents/Logo";
import { Wrapper } from "../sharedCompnents/Wrapper";
import logo from "../Logo.jpg";
import phone from "../Phone.jpeg";
import InputForm from "./InputForm";
import ConfirmForm from "./ConfirmForm";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const phoneSlicer = creatSlice();
const Home = () => {
  const show = true;
  return (
    <Wrapper>
      <Context>
        <Logo>
          <img
            style={{ width: "30rem", height: "70vh" }}
            src={logo}
            alt="logo"
          />
        </Logo>
        <FormContainer>
          <img
            style={{ marginTop: "40px", width: "50px" }}
            src={phone}
            alt="phone"
          />
          {show ? <InputForm /> : <ConfirmForm />}
        </FormContainer>
      </Context>
    </Wrapper>
  );
};

export default Home;
