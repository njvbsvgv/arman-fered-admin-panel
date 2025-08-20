import { createResumeInputData } from "../../../core/constant";
import EditeFormLeftItem from "./EditeFormLeftItem";
import { useFormik } from "formik";
import { createResumeFormValidation } from "../../../core/validation/createResumeFormValidation";
import { useSelector } from "react-redux";
import type { TEditeForm } from "../../../core/types/TEditeForm";
import BtnItem from "./BtnItem";
import EditeFormInputs from "./EditeFormInputs";
import type { TEditeResumeFormikValue } from "../../../core/types/TEditeResumeFormikValue";
import { useUpdateResume } from "../../../core/services/api";
import { useParams } from "react-router";

const EditeForm: React.FC<TEditeForm> = ({ formData }) => {
  const { resumeEditeData, editeImage } = useSelector(
    (state: any) => state.resumeEditeDataState
  );
  const { id } = useParams()
  console.log("id ==>", id)
  const updateResume = useUpdateResume(
    "updateResume",
    `https://689e9f3a3fed484cf8778bea.mockapi.io/resumeApi/${id}`
  );
  const formik = useFormik<TEditeResumeFormikValue>({
    initialValues: {
      image: formData.image,
      resumeName: formData.resumeName,
      jobTitle: formData.jobTitle,
      jobDescription: formData.jobDescription,
    },
    validationSchema: createResumeFormValidation,
    onSubmit: (values) => {
      values = { ...values, image: editeImage ? editeImage : formData.image };
      updateResume.mutate(values)
    },
  });

  return (
    <form
      action=""
      className="w-full mt-12"
      onSubmit={(event) => {
        event.preventDefault(), formik.handleSubmit();
      }}
      data-aos="fade-down"
    >
      <div className="form-input-control flex gap-x-3 max-md:flex-col-reverse max-md:items-center">
        <div className="right w-[70%] flex flex-col gap-y-9 max-md:w-full max-md:mt-8">
          {createResumeInputData.map((item, index) => {
            return <EditeFormInputs item={item} formik={formik} key={index} />;
          })}
        </div>
        <EditeFormLeftItem
          value={formik.values.image}
          name="image"
          onChange={formik.handleChange}
        >
          {formik.touched.image && formik.errors.image && (
            <span className="text-red-600 text-[14px]">
              {formik.errors.image}
            </span>
          )}
        </EditeFormLeftItem>
      </div>
      <BtnItem isLoading={updateResume.isLoading} />
    </form>
  );
};

export default EditeForm;
