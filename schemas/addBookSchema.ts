import * as yup from "yup";

export const addBookSchema = yup
  .object({
    title: yup.string().required("Title is required*"),
    author: yup.string().required("Author is required*"),
    pages: yup
      .number()
      .typeError("Pages must be a number*")
      .required("Pages are required*")
      .min(1, "Number must be greater than or equal to 1*"),
  })
  .required();
