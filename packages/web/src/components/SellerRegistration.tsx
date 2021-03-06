import { Page } from "../sharedCompnents/Page";
import { Sidebar } from "../sharedCompnents/Sidebar";
import React from "react";

import { CenterCard } from "./CenterCard";

import { Wrapper } from "../sharedCompnents/Wrapper";
import { Box } from "./Box";
import { TextInput } from "../sharedCompnents/TextInput";
import { SellerCard } from "./SellerCard";

export const SellerRegistration = () => {
  return (
    <Page>
      <Sidebar />
      <Wrapper>
        <Box headerText="اطلاعات کاربر">
          <SellerCard />
        </Box>
        <Box headerText="اطلاعات فروشگاه">
          <CenterCard />
        </Box>
      </Wrapper>
    </Page>
  );
};
