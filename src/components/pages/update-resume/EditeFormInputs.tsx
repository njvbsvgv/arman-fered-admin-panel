import type React from "react";
import { CustomeInput } from "../../common";
import type { TEditeFormInput } from "../../../core/types/TEditeFormInput";

const EditeFormInputs: React.FC<TEditeFormInput> = ({ item, formik }) => {
  return (
    <div className="input-item-control flex flex-col gap-y-2.5">
      <span className="text-[15px] indent-2">{item.inputTitle}</span>
      {item.inputType !== "textarea" ? (
        <CustomeInput
          width={100}
          name={item.inputName}
          type={item.inputType}
          value={formik.values[item.value as keyof typeof formik.values] ?? ""}
          onChange={formik.handleChange}
        />
      ) : (
        <textarea
          name={item.inputName}
          value={formik.values[item.value as keyof typeof formik.values]}
          onChange={formik.handleChange}
          className="outline-0 h-[100px] border rounded-2xl p-2 resize-none border-[#E5E7EB] text-[14px]"
        />
      )}
      {formik.touched[item.inputName as keyof typeof formik.values] &&
        formik.errors[item.inputName as keyof typeof formik.values] && (
          <span className="text-red-600 text-xs indent-2">
            {formik.errors?.[item.inputName as keyof typeof formik.values]}
          </span>
        )}
    </div>
  );
};

export default EditeFormInputs;
