import React, { useEffect, type JSX } from "react";
import { CustomeBt } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import type { TInputOnChange } from "../../../core/types/TInputOnChange";
import SpinnerLoading from "../../common/SpinnerLoading";
import { useUpdateImage } from "../../../core/services/api";
import { addEditeImage } from "../../../core/redux/slice/actions";

interface TCreateResumeForm {
  value?: string;
  name: string;
  children?: JSX.Element | React.ReactNode;
  onChange: (e: TInputOnChange) => void;
}

const EditeFormLeftItem: React.FC<TCreateResumeForm> = ({
  name,
  children,
  onChange,
  value,
}) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const { resumeEditeData, editeImage } = useSelector(
    (state: any) => state.resumeEditeDataState
  );
  const updateImage = useUpdateImage("updateImge");

  const uploadImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("filename", file);
    onChange(event);
    updateImage.mutate(formData);
  };

  useEffect(() => {
    return () => {
      dispatch(addEditeImage(null));
    };
  }, []);

  return (
    <div className="left w-[300px] flex justify-center">
      <div
        className="upload-image-control w-[238px] h-[228px] border border-[#E5E7EB] rounded-3xl
        flex justify-center items-center mt-7 overflow-hidden relative
        max-md:mt-0"
      >
        {!updateImage.isLoading && resumeEditeData?.image ? (
          <>
            <img
              src={editeImage ? editeImage : resumeEditeData?.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={uploadImageHandler}
              name={name}
            />
            <CustomeBt
              text="تغییر عکس"
              type={"button"}
              className="flex items-center justify-center gap-x-2 cursor-pointer
                  absolute bottom-0 bg-red-500 text-white w-full"
              onClick={() => fileInputRef.current?.click()}
            />
          </>
        ) : (
          <button className="flex items-center gap-x-2">
            <span> درحال بارگزاری عکس... </span>
            <SpinnerLoading width={13} height={13} />
          </button>
        )}
      </div>
    </div>
  );
};

export default EditeFormLeftItem;
