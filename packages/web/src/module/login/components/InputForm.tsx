import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { setPhoneAction } from "../States/phoneSlicer";
// import { AppDispatch } from "../States/Store";
import { useForm, SubmitHandler } from "react-hook-form";
<<<<<<< HEAD:packages/web/src/module/login/components/InputForm.tsx
import { TextInput } from "../../components/inputs/TextInput";
import { ButtonConfirm } from "../../components/buttons/ButtonConfirm";
=======
import { TextInput } from "../sharedCompnents/TextInput";
import { Button } from "../sharedCompnents/ButtonConfirm";
>>>>>>> 48ca3d80d8b70f543d25fa1b7a0cc6bdd115fe42:packages/web/src/components/InputForm.tsx

export const InputFormCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  /* margin-top: 100px; */
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
      {phoneExist ? <h3>کد تایید</h3> : <h3>ورود</h3>}
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
            <TextInput
              style={{ margin: "10px", width: "50%" }}
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
            <TextInput
              id="phone"
              type="number"
              name="phone"
              style={{ margin: "10px 10px", width: "50%" }}
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
<<<<<<< HEAD:packages/web/src/module/login/components/InputForm.tsx
        <ButtonConfirm style={{ width: "100%" }}>
=======
        <Button buttonText={"submit"} backgroundcolor={"white"}>
>>>>>>> 48ca3d80d8b70f543d25fa1b7a0cc6bdd115fe42:packages/web/src/components/InputForm.tsx
          {phoneExist ? "تایید" : "دریافت کد"}
        </Button>
      </form>
    </InputFormCon>
  );
};
export default InputForm;
