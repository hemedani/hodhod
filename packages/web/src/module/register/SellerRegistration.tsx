import { Page } from "../components/wrappers/Page";
import { Sidebar } from "../components/sidebar/Sidebar";
import React from "react";
import { CenterCard } from "./components/CenterCard";

import { Box } from "../components/wrappers/Box";
import { SellerCard } from "./components/SellerCard";
import { Wrapper } from "../components/wrappers/Wrapper";

export const SellerRegistration = () => {
  return (
    <Page>
      <Wrapper>
        <Box headerText="اطلاعات کاربر" minWidth="80%">
          <SellerCard />
        </Box>
        <Box headerText="اطلاعات فروشگاه" flexDirection="column">
          <CenterCard />
        </Box>
      </Wrapper>
      <Sidebar />
    </Page>
  );
};
