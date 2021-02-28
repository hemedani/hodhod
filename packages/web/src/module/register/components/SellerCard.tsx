import React from "react";
import styled from "styled-components";
import { Card } from "../../components/wrappers/Card";
import { Input } from "../../components/inputs/TextInput";
import { items } from "../../data/SellerCardElements";
export const SellerRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const SellerCard = () => {
  const elements = items.map((item) => (
    <Input type={item.type} name={item.name} placeholder={item.placeholder} />
  ));
  return <Card>{elements}</Card>;
};
