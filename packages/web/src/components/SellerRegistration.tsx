import { Page } from "../sharedCompnents/Page";
import { Sidebar } from "../sharedCompnents/Sidebar";
import React from "react";
import { SellerCard } from "./SellerCard";
import { CenterCard } from "./CenterCard";
import { FormContainer } from "../sharedCompnents/FormContainer";
import { Wrapper } from "../sharedCompnents/Wrapper";

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
          <SellerCard />
          <CenterCard />
        </FormContainer>
      </Wrapper>
    </Page>
  );
};
