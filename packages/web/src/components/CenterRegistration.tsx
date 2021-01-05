import React from "react";
import { Context } from "../sharedCompnents/Context";
import { FormContainer } from "../sharedCompnents/FormContainer";
import { Wrapper } from "../sharedCompnents/Wrapper";
import styled from "styled-components";

export const CenterRegFormCon = styled.div`
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

export const CenterRegForm = () => {
  return (
    <CenterRegFormCon>
      <h3 style={{ marginRight: "60px" }}>اطلاعات فروشگاه</h3>
      <form style={{ marginRight: "0px" }}>
        <FormDiv>
          <FormLabel>نام فروشگاه</FormLabel> <input type="text" name="name" />
          <FormLabel> دسته بندی</FormLabel> <input type="text" name="name" />
          <FormLabel>تلفن فروشگاه</FormLabel> <input type="text" name="name" />
        </FormDiv>
        <FormDiv>
          <FormLabel>کشور</FormLabel> <input type="text" name="name" />
          <FormLabel>استان</FormLabel> <input type="text" name="name" />
          <FormLabel>شهر</FormLabel> <input type="text" name="name" />
        </FormDiv>
        <FormDiv>
          <FormLabel>محله</FormLabel> <input type="text" name="name" />
          <FormLabel>آدرس</FormLabel>
          <input type="text" name="name" />
        </FormDiv>
      </form>
    </CenterRegFormCon>
  );
};

export const CenterReg = () => {
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
          <CenterRegForm />
        </FormContainer>
      </Context>
    </Wrapper>
  );
};
