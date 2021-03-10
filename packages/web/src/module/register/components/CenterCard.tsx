import React from "react";
import styled from "styled-components";
import { Input } from "../../components/inputs/TextInput";
import upload from "../../../assets/images/Upload.png";
import { Card } from "../../components/wrappers/Card";
import { Button } from "../../components/buttons/ButtonConfirm";
import { Box } from "../../components/wrappers/Box";
import { items } from "../../data/SellerCardElements";
import { Page } from "../../components/wrappers/Page";
import { Wrapper } from "../../components/wrappers/Wrapper";
import { LeafletMap } from "../../data/LeafletMap";

export const CenterRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const CenterCard = () => {
  const elements = items.map((item) => (
    <Input type={item.type} name={item.name} placeholder={item.placeholder} />
  ));
  return (
    <Page>
      <Wrapper>
        <Card>{elements}</Card>

        <Box width="100%" boxShadow="none">
          <img
            src={upload}
            alt="upload"
            style={{
              width: "10rem",
              height: "10rem",
            }}
          />

          <LeafletMap />
        </Box>
        <Box flexDirection="row" boxShadow="none">
          <Button>ثبت نام</Button>
          <Button>لغو</Button>
        </Box>
      </Wrapper>
    </Page>
  );
};
