import { Page } from "../sharedCompnents/Page";
import { Sidebar } from "../sharedCompnents/Sidebar";
import React from "react";
import { Card, CardElement } from "../sharedCompnents/Card";
import { CenterCard } from "./CenterCard";
import { FormContainer } from "../sharedCompnents/FormContainer";
import { Wrapper } from "../sharedCompnents/Wrapper";
import { Box } from "./Box";
import { TextInput } from "../sharedCompnents/TextInput";
import { SellerCard } from "./SellerCard";

export const SellerRegistration = () => {
  return (
    <Page>
      <Wrapper>
        <Sidebar />
        <FormContainer
          style={{
            boxShadow: "none",
            border: "none",
          }}
        >
          {/* <SellerCard /> */}
          <Box headerText="اطلاعات کاربر">
            <SellerCard />
          </Box>
          <CenterCard />
        </FormContainer>
      </Wrapper>
    </Page>
  );
};
