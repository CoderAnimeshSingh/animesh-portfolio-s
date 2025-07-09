import { useContext } from "react";
import { FormContext } from "./form-context";

export function useFormField() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormField must be used within a FormProvider");
  }
  return context;
}