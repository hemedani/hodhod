import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ConfirmFormCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 100px;
`;

const ConfirmForm = () => {
  return (
    <ConfirmFormCon>
      <h3>کد تایید</h3>
      <form style={{ alignSelf: "center" }}>
        <label style={{ margin: "0px 10px" }}>کد را وارد کنید</label>
        <a href="/Home">
          <label style={{ margin: "0px 10px" }}>ویرایش شماره</label>
        </a>
        <br />
        <input style={{ margin: "10px" }} type="text"></input>
        <br />
        <button style={{ margin: "10px", width: "80%" }}>دریافت کد</button>
      </form>
    </ConfirmFormCon>
  );
};
export default ConfirmForm;
