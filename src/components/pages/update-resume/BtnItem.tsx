import React from "react";
import { BtnLoading, CustomeBt } from "../../common";
import { useNavigate } from "react-router";

interface TBtn {
  isLoading: boolean;
}

const BtnItem: React.FC<TBtn> = ({ isLoading }) => {
  const navigation = useNavigate();
  return (
    <div className="btn-control flex gap-x-3.5 mt-6 max-md:justify-center">
      {!isLoading ? (
        <CustomeBt
          text="ثبت"
          type="submit"
          className="formBtn
        bg-[#4F6DF5] border-[#4F6DF5] text-white"
        />
      ) : (
        <BtnLoading className="bg-[#4F6DF5] border-[#4F6DF5] text-white p-2 px-3 rounded-2xl" />
      )}
      <CustomeBt
        text="لغو"
        type="reset"
        className="formBtn border-[#4F6DF5]"
        onClick={() => navigation("/resume")}
      />
    </div>
  );
};

export default BtnItem;
