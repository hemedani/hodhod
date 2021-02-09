import React from "react";
import { Wrapper } from "../sharedCompnents/Wrapper";
import { FormContainer } from "../sharedCompnents/FormContainer";
import { Logo } from "../sharedCompnents/Logo";
import logo from "../Logo.jpg";
import phone from "../Phone.jpeg";
import InputForm from "./InputForm";
import { Page } from "../sharedCompnents/Page";
import { Card, CardElement } from "../sharedCompnents/Card";

const Home = () => {
  return (
    <Page>
      <Wrapper>
        <Logo>
          <img style={{ maxWidth: "500px" }} src={logo} alt="logo" />
        </Logo>
        <FormContainer
          style={{
            minHeight: "30vh",
            minWidth: "32vw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ flexDirection: "column" }}>
            <CardElement style={{ alignSelf: "center" }}>
              <img style={{ width: "5rem" }} src={phone} alt="phone" />
            </CardElement>
            <CardElement style={{ marginTop: "-10px" }}>
              <InputForm />
            </CardElement>
          </Card>
        </FormContainer>
      </Wrapper>
    </Page>
  );
};

export default Home;
