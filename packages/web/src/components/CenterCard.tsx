import React from "react";
import styled from "styled-components";
import { Button } from "../module/components/buttons/ButtonConfirm";
import { Input } from "../module/components/inputs/TextInput";
import { Box } from "../module/components/wrappers/Box";
import { Card } from "../module/components/wrappers/Card";
import { Wrapper } from "../module/components/wrappers/Wrapper";
import { items } from "../module/data/SellerCardElements";
import upload from "../assets/images/Upload.png";
import map from "../assets/images/Map.png";

export const CenterRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const CenterCard = () => {
  const elements = items.map((item) => (
    <Input name={item.name} type={item.type} placeholder={item.placeholder} />
  ));

  return (
    <Wrapper>
      <Card>{elements}</Card>

      <Box>
        <img
          src={upload}
          alt="map"
          style={{
            width: "10rem",
            height: "10rem",
          }}
        />
      </Box>
      <Box>
        <img
          src={map}
          alt="map"
          style={{
            width: "40rem",
            height: "10rem",
          }}
        />
      </Box>

      <Button buttonText={"submit"} backgroundcolor={"white"}>
        ثبت نام
      </Button>
      <Button backgroundcolor={"white"}>لغو</Button>
    </Wrapper>
  );
};
