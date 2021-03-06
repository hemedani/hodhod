import React from "react";
import styled from "styled-components";
import { Input } from "../sharedCompnents/TextInput";
import map from "../Map.png";
import upload from "../Upload.png";
import { Button } from "../sharedCompnents/ButtonConfirm";
import { Box, Card } from "./Box";
import { Wrapper } from "../sharedCompnents/Wrapper";
import { items } from "../sharedCompnents/CenterCardElements";

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
