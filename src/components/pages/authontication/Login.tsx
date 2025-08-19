import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { CustomeBt } from "../../common";
import { useFormik } from "formik";
import { loginFormValues } from "../../../core/form-values";
import { loginFormvalidation } from "../../../core/validation/loginFormValidation";
import BtnSubmitItem from "./BtnSubmitItem";
import { useGetLoginData } from "../../../core/services/api";
import { useDispatch } from "react-redux";
import { addDataToLoginFirstState } from "../../../core/redux/slice/actions";

const Login = () => {
  const [eyeFlag, setEyeFlag] = useState<boolean>(true);
  const dispatch = useDispatch();

  const useGetData = useGetLoginData(
    "getLoginData",
    "https://68a44ae2c123272fb9b221a5.mockapi.io/loginApi"
  );
  const formik = useFormik({
    initialValues: loginFormValues,
    validationSchema: loginFormvalidation,
    onSubmit: (values) => {
        dispatch(addDataToLoginFirstState(values));
        useGetData.mutate(values);
    },
  });

  return (
    <div className="login-page-control w-full flex justify-center mt-[200px]">
      <form
        action=""
        className="w-[30%] p-4 bg-[#FFFFFF] rounded-2xl flex flex-col items-center"
        onSubmit={(event) => (event.preventDefault(), formik.handleSubmit())}
      >
        <p> ورود به پنل </p>
        <div className="natinaliti-code-control w-4/5 mt-7">
          <input
            type="text"
            className="loginInput"
            name="nationalitiCode"
            placeholder="کد ملی"
            value={formik.values.nationalitiCode}
            onChange={formik.handleChange}
          />
          {formik.touched.nationalitiCode && formik.errors.nationalitiCode && (
            <p className="text-xs indent-2 mt-1.5 text-red-600">
              {formik.errors.nationalitiCode}
            </p>
          )}
        </div>
        <div className="password-control relative w-4/5 mt-5">
          {eyeFlag ? (
            <IoMdEyeOff
              className="absolute right-3 top-3"
              onClick={() => setEyeFlag(!eyeFlag)}
            />
          ) : (
            <IoEye
              className="absolute right-3 top-3"
              onClick={() => setEyeFlag(!eyeFlag)}
            />
          )}
          <input
            type={eyeFlag ? "password" : "text"}
            className="loginInput indent-3"
            name="password"
            placeholder=""
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-xs indent-2 mt-1.5 text-red-600">
              {formik.errors.password}
            </p>
          )}
        </div>
        <BtnSubmitItem isLoading={useGetData.isLoading} />
      </form>
    </div>
  );
};

export default Login;
