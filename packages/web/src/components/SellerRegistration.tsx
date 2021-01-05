import React from "react";
import { Context } from "../sharedCompnents/Context";
import { FormContainer } from "../sharedCompnents/FormContainer";
import { Wrapper } from "../sharedCompnents/Wrapper";
import styled from "styled-components";

export const SellerRegFormCon = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 10px;
`;
export const FormLabel = styled.label`
  width: 100px;
  text-align: right;
  margin-right: 20px;
`;
export const FormDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 40px;
`;

export const SellerRegForm = () => {
  return (
    <SellerRegFormCon>
      <h3 style={{ marginRight: "60px" }}>اطلاعات کاربر</h3>
      <form style={{ marginRight: "0px" }}>
        <FormDiv>
          <FormLabel>نام</FormLabel> <input type="text" name="name" />
          <FormLabel> نام خانوادگی</FormLabel> <input type="text" name="name" />
          <FormLabel>کد ملی</FormLabel> <input type="text" name="name" />
        </FormDiv>
        <FormDiv>
          <FormLabel>شماره همراه</FormLabel> <input type="text" name="name" />
          <FormLabel>تلفن ثابت</FormLabel> <input type="text" name="name" />
          <FormLabel>کشور</FormLabel> <input type="text" name="name" />
        </FormDiv>
        <FormDiv>
          <FormLabel>استان</FormLabel> <input type="text" name="name" />
          <FormLabel>شهر</FormLabel>
          <input type="text" name="name" />
          <FormLabel>محله</FormLabel> <input type="text" name="name" />
        </FormDiv>
        <FormDiv>
          <FormLabel>آدرس</FormLabel> <input type="text" name="name" />
        </FormDiv>
      </form>
    </SellerRegFormCon>
  );
};

export const SellerReg = () => {
  return (
    <Wrapper>
      <Context>
        <FormContainer
          style={{
            marginTop: "-100px",
            width: "85vw",
            marginRight: "0px",
            borderRadius: "10px",
            boxShadow: "10px",
          }}
        >
          <SellerRegForm />
        </FormContainer>
      </Context>
    </Wrapper>
  );
};
