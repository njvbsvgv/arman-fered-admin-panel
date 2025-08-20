import { BtnLoading, CustomeBt, CustomeInput } from "../../common";
import { createResumeInputData } from "../../../core/constant";
import FormLeftItem from "./FormLeftItem";
import { useFormik } from "formik";
import { createResumeFormValues } from "../../../core/form-values";
import { createResumeFormValidation } from "../../../core/validation/createResumeFormValidation";
import { createResumePost } from "../../../core/services/api";
import { useSelector } from "react-redux";

const CreateForm = () => {
  const image = useSelector((state: any) => state.informationState.image);
  const { mutate, isLoading } = createResumePost(
    "createResume",
    "https://689e9f3a3fed484cf8778bea.mockapi.io/resumeApi"
  );
  console.log("form image ==>", image)
  const formik = useFormik({
    initialValues: createResumeFormValues,
    validationSchema: createResumeFormValidation,
    onSubmit: (values) => {
      console.log("values ==>", values);
      values = { ...values, image: image ? image : "" }
      mutate(values);
    },
  });

  return (
    <form
      action=""
      className="mt-12"
      onSubmit={(event) => {
        event.preventDefault(), formik.handleSubmit();
      }}
      data-aos="fade-down"
    >
      <div className="form-input-control flex gap-x-3 max-md:flex-col-reverse max-md:items-center">
        <div className="right w-[70%] flex flex-col gap-y-9 max-md:w-full max-md:mt-8">
          {createResumeInputData.map((item, index) => {
            return (
              <div className="input-item-control flex flex-col gap-y-2.5">
                <span className="text-[15px] indent-2">{item.inputTitle}</span>
                <CustomeInput
                  key={index}
                  width={100}
                  name={item.inputName}
                  type={item.inputType}
                  value={
                    formik.values[item.value as keyof typeof formik.values] ??
                    ""
                  }
                  onChange={formik.handleChange}
                />
                {formik.touched[item.value as keyof typeof formik.values] &&
                  formik.errors[item.value as keyof typeof formik.values] && (
                    <span className="text-red-600 text-xs indent-2">
                      {formik.errors[item.value as keyof typeof formik.values]}
                    </span>
                  )}
              </div>
            );
          })}
        </div>
        <FormLeftItem
          value={formik.values.image}
          name="image"
          onChange={formik.handleChange}
        >
          {formik.touched.image && formik.errors.image && (
            <span className="text-red-600 text-[14px]">
              {formik.errors.image}
            </span>
          )}
        </FormLeftItem>
      </div>
      <div className="btn-control flex gap-x-3.5 mt-6 max-md:justify-center">
        {!isLoading ? <CustomeBt
          text="ثبت"
          type="submit"
          className="formBtn
        bg-[#4F6DF5] border-[#4F6DF5] text-white"
        /> : <BtnLoading className="bg-[#4F6DF5] border-[#4F6DF5] text-white p-2 px-3 rounded-2xl" />}
        <CustomeBt
          text="لغو"
          type="reset"
          className="formBtn border-[#4F6DF5]"
          onClick={formik.handleReset}
        />
      </div>
    </form>
  );
};

export default CreateForm;
