import * as yup from "yup";

export const stopReadingSchema = yup
  .object({
    finishPage: yup
      .number()
      .typeError("Pages must be a number*")
      .required("Pages are required*")
      .min(1, "Number must be greater than or equal to 1*"),
  })
  .required();
