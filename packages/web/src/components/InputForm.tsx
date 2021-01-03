import React, { ChangeEvent } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { setPhoneAction } from "../States/phoneSlicer";
// import { AppDispatch } from "../States/Store";
import { useForm } from "react-hook-form";
import { stringify } from "querystring";

export const InputFormCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 100px;
`;

export const ConfirmFormCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 100px;
`;

const InputForm = () => {
  // const [phone, setPhone] = useState("");

  // const dispatch = useDispatch<AppDispatch>();

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   dispatch(setPhoneAction(Number(phone)));
  // };
  const { register, handleSubmit, errors } = useForm();

  let phoneNumberIsTrue = false;

  const onSubmit = handleSubmit(async ({ phoneInput }) => {
    if (phoneInput) phoneNumberIsTrue = true;
    else phoneNumberIsTrue = false;
    console.log(phoneInput);
  });

  console.log("render");

  return phoneNumberIsTrue === false ? (
    <InputFormCon>
      <h3>ورود</h3>
      <form style={{ alignSelf: "center" }} onSubmit={onSubmit}>
        <label>شماره تلفن خود را وارد کنید</label>
        <br />
        <input
          id="phone"
          type="number"
          name="phoneInput"
          style={{ margin: "10px 10px" }}
          ref={register({
            required: true,
            minLength: 5,
          })}
        />

        {errors.phoneInput && errors.phoneInput.type === "required" && (
          <p
            style={{
              fontSize: "10px",
              padding: "0",
              margin: "0px",
              color: "red",
            }}
          >
            این کادر الزامی است
          </p>
        )}
        {errors.phoneInput && errors.phoneInput.type === "minLength" && (
          <p
            style={{
              fontSize: "10px",
              padding: "0",
              margin: "0px",
              color: "red",
            }}
          >
            حداقل ۵ کارکتر
          </p>
        )}
        <button type="submit" style={{ width: "65%" }}>
          دریافت کد
        </button>
      </form>
    </InputFormCon>
  ) : (
    <ConfirmFormCon>
      <h3>کد تایید</h3>
      <form style={{ alignSelf: "center" }} onSubmit={onSubmit}>
        <label style={{ margin: "0px 10px" }}>کد را وارد کنید</label>
        <a href="/Home">
          <label style={{ margin: "0px 10px" }}>ویرایش شماره</label>
        </a>
        <br />
        <input
          style={{ margin: "10px" }}
          type="text"
          name="confirmInput"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.confirmInput && (
          <p style={{ fontSize: "10px", margin: "0", color: "red" }}>
            {" "}
            This is required
          </p>
        )}

        <br />
        <button style={{ margin: "10px", width: "80%" }}>دریافت کد</button>
      </form>
    </ConfirmFormCon>
  );
};
export default InputForm;
