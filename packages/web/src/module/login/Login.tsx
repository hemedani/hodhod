import React from "react";
import logo from "../../assets/images/Logo.jpg";
import phone from "../../assets/images/Phone.jpeg";
import InputForm from "./components/InputForm";
import { Page } from "../components/wrappers/Page";
import { Card } from "../components/wrappers/Card";
import { Box } from "../components/wrappers/Box";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Login = () => {
  return (
    <Page>
      <Box flexDirection="row" boxShadow="none">
        <Box>
          <img style={{ maxWidth: "400px" }} src={logo} alt="logo" />
        </Box>
        <Box>
          <Card style={{ flexDirection: "column" }}>
            <img style={{ width: "5rem" }} src={phone} alt="phone" />

            <InputForm />
          </Card>
        </Box>
      </Box>
      <Sidebar />
    </Page>
  );
};
