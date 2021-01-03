import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputFormCon = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const InputForm = () => {
  return (
    <InputFormCon>
      <h3>ورود</h3>
      <form>
        <label>شماره تلفن خود را وارد کنید</label>
        <br />
        <input type="text"></input>
        <br />
        <button style={{ width: "100%" }}>دریافت کد</button>
      </form>
    </InputFormCon>
  );
};
export default InputForm;
