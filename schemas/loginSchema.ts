import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required*")
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format*"),
    password: yup.string().required("Password is required*"),
  })
  .required();
