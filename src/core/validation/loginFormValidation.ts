import * as yup from "yup";
export const loginFormvalidation = yup.object({
  nationalitiCode: yup
    .string()
    .required("این فیلد اجباریست")
    .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
    .test("not-all-same", "کد ملی معتبر نیست", (value) =>
      value ? !/^(\d)\1{9}$/.test(value) : false
    ),
  password: yup.string().required("این فیلد اجباریست"),
});
