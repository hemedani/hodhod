import React from "react";

import styled from "styled-components";

import { Input } from "../module/components/inputs/TextInput";
import { items } from "../module/data/SellerCardElements";
import { Card } from "./Box";
export const SellerRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* margin-top: 10px; */
`;

export const SellerCard = () => {
  const elements = items.map((item) => (
    <Input type={item.type} name={item.name} placeholder={item.placeholder} />
  ));

  return <Card>{elements}</Card>;
};
