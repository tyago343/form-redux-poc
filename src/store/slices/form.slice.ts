import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum FormNames {
  TRAVELERS = "travelers",
  CRITERIAS = "criterias",
  PAYMENT = "payment",
}
export type FormState = {
  [k in FormNames]?: FormData;
};
export type FormData = {
  [k: string]: string;
};
const intialState: FormState = {
  [FormNames.TRAVELERS]: {},
  [FormNames.CRITERIAS]: {},
  [FormNames.PAYMENT]: {},
};
export const formSlice = createSlice({
  name: "forms",
  initialState: intialState,
  reducers: {
    addForm: (
      state,
      action: PayloadAction<{
        formName: FormNames;
        formValues: FormData;
      }>
    ) => {
      state[action.payload.formName] = action.payload.formValues;
    },
    updateFormData: (
      state,
      action: PayloadAction<{
        formName: FormNames;
        formValues: FormData;
      }>
    ) => {
      state[action.payload.formName] = {
        ...state[action.payload.formName],
        ...action.payload.formValues,
      };
    },
    resetForm: (state, action: PayloadAction<FormNames>) => {
      state[action.payload] = {};
    },
  },
});
export const { addForm, updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
