import * as yup from "yup";

export const loginSchema = yup
  .object({
    mail: yup
      .string()
      .required("Mail is required*")
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid mail format*"),
    password: yup.string().required("Password is required*"),
  })
  .required();
