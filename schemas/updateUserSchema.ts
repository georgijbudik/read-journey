import * as yup from "yup";

export const updateUserSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required*")
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format*"),
    name: yup.string().required("Name is required*"),
  })
  .required();
