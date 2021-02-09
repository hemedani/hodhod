import React from "react";
import { FormContainer } from "../sharedCompnents/FormContainer";
import styled from "styled-components";
import { TextInput } from "../sharedCompnents/TextInput";
import { AddressInput } from "../sharedCompnents/AddressInput";
import map from "../Map.png";
import upload from "../Upload.png";
import { Card, CardElement } from "../sharedCompnents/Card";
import { ButtonConfirm } from "../sharedCompnents/ButtonConfirm";

export const CenterRegFormCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const CenterCard = () => {
  return (
    <FormContainer>
      <CenterRegFormCon>
        <h3 style={{ marginRight: "60px", alignSelf: "flex-end" }}>
          اطلاعات فروشگاه
        </h3>
        <form style={{ marginRight: "0px" }}>
          <Card>
            <CardElement>
              <TextInput type="text" name="name" placeholder="نام فروشگاه" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="دسته بندی" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="تلفن فروشگاه" />
            </CardElement>

            <CardElement>
              <TextInput type="text" name="name" placeholder="کشور" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="استان" />
            </CardElement>
            <CardElement>
              <TextInput type="text" name="name" placeholder="شهر" />
            </CardElement>

            <CardElement>
              <TextInput type="text" name="name" placeholder="محله" />
            </CardElement>
            <CardElement>
              <AddressInput
                style={{ width: "30rem" }}
                type="text"
                name="name"
                placeholder="آدرس"
              />
            </CardElement>
          </Card>
        </form>
        <FormContainer
          style={{
            boxShadow: "none",
            border: "none",
          }}
        >
          <Card>
            <CardElement>
              <img
                src={upload}
                alt="map"
                style={{
                  width: "10rem",
                  height: "10rem",
                }}
              />
            </CardElement>
            <CardElement>
              <img
                src={map}
                alt="map"
                style={{
                  width: "40rem",
                  height: "10rem",
                }}
              />
            </CardElement>
          </Card>
          <ButtonConfirm>ثبت نام</ButtonConfirm>
          <ButtonConfirm>لغو</ButtonConfirm>
        </FormContainer>
      </CenterRegFormCon>
    </FormContainer>
  );
};
