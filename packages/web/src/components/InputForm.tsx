import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { setPhoneAction } from "../States/phoneSlicer";
// import { AppDispatch } from "../States/Store";
import { useForm, SubmitHandler } from "react-hook-form";

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
type PhoneValue = {
  phone: string;
  code: string;
};

const InputForm = () => {
  const [phoneExist, setPhoneExist] = useState("");
  const { register, handleSubmit, errors, reset } = useForm<PhoneValue>();

  // const dispatch = useDispatch<AppDispatch>();
  // const componentDidMount = () => {
  //   return localStorage.getItem(phone);
  // };
  useEffect(() => {
    const localStoragePhone = localStorage.getItem("phoneExist");
    localStoragePhone && setPhoneExist(localStoragePhone);
  }, []);

  const onSubmit: SubmitHandler<PhoneValue> = (data) => {
    const doSendCode = (code: string) => {
      setPhoneExist("");
      reset();
      localStorage.removeItem("phoneExist");
    };
    const doSendPhone = (phone: string) => {
      setPhoneExist(phone);
      reset();
      localStorage.setItem("phoneExist", phone);
    };
    phoneExist ? doSendCode(data.code) : doSendPhone(data.phone);
  };

  return (
    <InputFormCon>
      <h3>ورود</h3>
      <form
        name="setPhone"
        style={{ alignSelf: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {phoneExist ? (
          <>
            <label style={{ margin: "0px 10px" }}>کد را وارد کنید</label>
            <a href="/Home">
              <label style={{ margin: "0px 10px" }}>ویرایش شماره</label>
            </a>
            <br />
            <input
              style={{ margin: "10px" }}
              type="text"
              name="code"
              ref={register({ minLength: 5 })}
            />
            {errors.code && (
              <p style={{ fontSize: "10px", margin: "0", color: "red" }}>
                {" "}
                This is required
              </p>
            )}

            <br />
          </>
        ) : (
          <>
            <label>شماره تلفن خود را وارد کنید</label>
            <br />
            <input
              id="phone"
              type="number"
              name="phone"
              style={{ margin: "10px 10px" }}
              ref={register({
                pattern: /^(0)?9\d{9}$/,
                minLength: 11,
              })}
            />

            {errors.phone && errors.phone.type === "pattern" && (
              <p
                style={{
                  fontSize: "10px",
                  padding: "0",
                  margin: "0px",
                  color: "red",
                }}
              >
                شماره تلفن درست وارد نشده
              </p>
            )}

            {errors.phone && errors.phone.type === "minLength" && (
              <p
                style={{
                  fontSize: "10px",
                  padding: "0",
                  margin: "0px",
                  color: "red",
                }}
              >
                حداقل 11 کارکتر
              </p>
            )}
          </>
        )}
        <button type="submit" style={{ width: "65%" }}>
          {phoneExist ? "ورود" : "دریافت کد"}
        </button>
      </form>
    </InputFormCon>
  );
};
export default InputForm;
