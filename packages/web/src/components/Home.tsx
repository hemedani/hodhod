import React from "react";
import { Wrapper } from "../module/components/wrappers/Wrapper";

import Logo from "../assets/images/Logo.jpg";
import logo from "../Logo.jpg";
import phone from "../Phone.jpeg";
import InputForm from "../module/login/components/InputForm";
import { Page } from "../sharedCompnents/Page";

import { Box } from "./Box";

const Home = () => {
  return (
    <Page>
      <Wrapper>
        <Box>
          <img style={{ maxWidth: "500px" }} src={logo} alt="logo" />
        </Box>

        <Box>
          <img style={{ width: "5rem" }} src={phone} alt="phone" />

          <InputForm />
        </Box>
      </Wrapper>
    </Page>
  );
};

export default Home;
