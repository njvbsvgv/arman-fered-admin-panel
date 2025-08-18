import React from "react";
import type { TDetailInformation } from "../../../core/types/TDetailInformation";

const Information: React.FC<TDetailInformation> = ({
  resumeName,
  jobTitle,
  jobDescription,
}) => {
  return (
    <div className="text-control flex flex-col gap-y-8 max-md:items-center max-md:text-lg">
      <h3 className="max-md:text-center">
        <span>نام فیلم / سریال: </span>
        <span className="mt-2">{resumeName}</span>
      </h3>
      <h3 className="max-md:text-center">
        <p>عنوان:</p>
        <p className="mt-2">{jobTitle}</p>
      </h3>
      <h3 className="max-md:text-center">
        <p>توضیحات:</p>
        <p className="mt-2">{jobDescription}</p>
      </h3>
    </div>
  );
};

export default Information;
