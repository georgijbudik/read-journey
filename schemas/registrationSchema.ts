import * as yup from "yup";

export const registrationSchema = yup
  .object({
    name: yup.string().required("Name is required*"),
    mail: yup
      .string()
      .required("Mail is required*")
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid format"),
    password: yup
      .string()
      .required("Password is required*")
      .min(7, "Password must be at least 7 characters"),
  })
  .required();
