import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { phone: 0 };

export const phoneSlicer = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<number>) => ({
      ...state,
      phone: action.payload,
    }),
  },
});

export const setPhoneAction = phoneSlicer.actions.setPhone;
