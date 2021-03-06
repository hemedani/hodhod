import React from "react";
import { Wrapper } from "../sharedCompnents/Wrapper";

import { Logo } from "../sharedCompnents/Logo";
import logo from "../Logo.jpg";
import phone from "../Phone.jpeg";
import InputForm from "./InputForm";
import { Page } from "../sharedCompnents/Page";

import { Box } from "./Box";

const Home = () => {
  return (
    <Page>
      <Wrapper>
        <Logo>
          <img style={{ maxWidth: "500px" }} src={logo} alt="logo" />
        </Logo>

        <Box>
          <img style={{ width: "5rem" }} src={phone} alt="phone" />

          <InputForm />
        </Box>
      </Wrapper>
    </Page>
  );
};

export default Home;
