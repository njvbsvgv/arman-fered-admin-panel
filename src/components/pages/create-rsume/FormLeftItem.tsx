import React, { type JSX } from "react";
import { CustomeBt } from "../../common";
import { FaUpload } from "react-icons/fa6";
import { postImageUpload } from "../../../core/services/api/post/postImageUpload";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../../core/redux/slice/actions";
import type { TInputOnChange } from "../../../core/types/TInputOnChange";
import SpinnerLoading from "../../common/SpinnerLoading";

interface TCreateResumeForm {
  value?: string;
  name: string;
  children?: JSX.Element | React.ReactNode;
  onChange: (e: TInputOnChange) => void;
}

const FormLeftItem: React.FC<TCreateResumeForm> = ({
  name,
  children,
  onChange,
}) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const image = useSelector((state: any) => state.informationState.image);
  const dispatch = useDispatch();

  const uploadImage = postImageUpload("imageUpload");

  const uploadImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("filename", file);

    uploadImage.mutate(formData);

    onChange(event);
  };

  return (
    <div className="left w-[300px] flex justify-center">
      <div
        className="upload-image-control w-[238px] h-[228px] border border-[#E5E7EB] rounded-3xl
        flex justify-center items-center mt-7 overflow-hidden relative
        max-md:mt-0"
      >
        {!uploadImage.isLoading ? (
          image ? (
            <>
              <img src={image} alt="" className="w-full h-full object-cover" />
              <CustomeBt
                text="برداشتن عکس"
                className="flex items-center justify-center gap-x-2 cursor-pointer
                  absolute bottom-0 bg-red-500 text-white w-full"
                onClick={() => dispatch(addImage(null))}
              />
            </>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={uploadImageHandler}
                name={name}
              />
              <CustomeBt
                text="تصویر خود را وارد کنید"
                icon={<FaUpload />}
                className="flex items-center justify-center gap-x-2 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              />
              {children}
            </div>
          )
        ) : (
          <button className="flex items-center gap-x-2">
            <span> درحال آپلود عکس... </span>
            <SpinnerLoading width={13} height={13} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormLeftItem;
