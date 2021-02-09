import React from "react";
import { FormContainer } from "../sharedCompnents/FormContainer";
import styled from "styled-components";
import { TextInput } from "../sharedCompnents/TextInput";
import { AddressInput } from "../sharedCompnents/AddressInput";
import { NumberInput } from "../sharedCompnents/NumberInput";
import { Card, CardElement } from "../sharedCompnents/Card";
export const SellerRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* margin-top: 10px; */
`;

export const SellerCard = () => {
  return (
    <FormContainer>
      <SellerRegFormCon>
        <h3 style={{ marginRight: "60px", alignSelf: "flex-end" }}>
          اطلاعات کاربر
        </h3>
        <form style={{ marginRight: "0px" }}>
          <Card>
            <CardElement>
              <TextInput type="text" name="name" placeholder="نام" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="نام خانوادگی" />
            </CardElement>
            <CardElement>
              <NumberInput type="text" name="name" placeholder="کد ملی" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="شماره همراه" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="تلفن ثابت" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="کشور" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="استان" />{" "}
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="شهر" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="محله" />
            </CardElement>
            <CardElement>
              <AddressInput placeholder="آدرس" />
            </CardElement>
          </Card>
        </form>
      </SellerRegFormCon>
    </FormContainer>
  );
};
