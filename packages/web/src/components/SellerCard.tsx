import React from "react";
import { FormContainer } from "../sharedCompnents/FormContainer";
import styled from "styled-components";
import { Card, CardElement } from "../sharedCompnents/Card";
import { Input } from "../sharedCompnents/TextInput";
export const SellerRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* margin-top: 10px; */
`;

export const SellerCard = () => {
  return (
    // <FormContainer>
    <Card>
      <Input type="password" placeholder="نام" />
      <Input type="text" placeholder="نام خانوادگی" />
      <Input type="text" placeholder="کد ملی" />
      <Input type="text" placeholder="شماره همراه" />
      <Input type="text" placeholder="تلفن ثابت" />
      <Input type="text" placeholder="کشور" />
      <Input type="text" placeholder="استان" />{" "}
      <Input type="text" placeholder="شهر" />
      <Input type="text" placeholder="محله" />
      <Input type="text" placeholder="آدرس" />
    </Card>
    // </FormContainer>
  );
};
