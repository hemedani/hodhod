import { Page } from "../sharedCompnents/Page";
import { Sidebar } from "../module/components/sidebar/Sidebar";
import React from "react";

import { CenterCard } from "./CenterCard";

import { Wrapper } from "../module/components/wrappers/Wrapper";
import { Box } from "./Box";
import { TextInput } from "../module/components/inputs/TextInput";
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
