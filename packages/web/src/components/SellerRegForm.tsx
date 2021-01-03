import React from "react";
import styled from "styled-components";

export const SellerRegFormCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 100px;
`;

const SellerRegForm = () => {
  return (
    <SellerRegFormCon>
      <h3>ثبت نام فروشنده</h3>
      <form style={{ alignSelf: "center" }}>
        <label style={{ margin: "0px 10px" }}>شماره ملی خود را وارد کنید</label>
        <br />
        <input style={{ margin: "10px" }} type="text"></input>
        <br />
        <button style={{ margin: "10px", width: "80%" }}>دریافت کد</button>
      </form>
    </SellerRegFormCon>
  );
};

export default SellerRegForm;
