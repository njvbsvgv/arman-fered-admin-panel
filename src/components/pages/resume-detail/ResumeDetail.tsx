import React from "react";
import FormLayout from "../../partial/FormLayout";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useGetResumeWithId } from "../../../core/services/api";
import Information from "./Information";
import { CustomeBt } from "../../common";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useDeleteResume } from "../../../core/services/api/delete/useDeleteResume";
import BtnItem from "./BtnItem";

const ResumeDetail = () => {
  const data = useSelector(
    (state: any) => state.resumeDetailState.resumeDetailData
  );
  const { id } = useParams();
  const {} = useGetResumeWithId(
    "getResumeDetail",
    `https://689e9f3a3fed484cf8778bea.mockapi.io/resumeApi/${id}`,
    id ? true : false
  );

  return (
    <div className="resume-detail-holder w-full flex justify-center mt-28">
      <FormLayout width={90}>
        <div className="item-control w-full flex justify-between max-md:flex-col-reverse max-md:items-center">
          <div className="right mt-5">
            <Information
              resumeName={data?.resumeName}
              jobTitle={data?.jobTitle}
              jobDescription={data?.jobDescription}
            />
            <BtnItem id={id ? id : ""} data={data && data}/>
          </div>
          <div className="left">
            <div className="image-control w-[400px] h-[400px] rounded-2xl overflow-hidden
            max-xl:w-[300px] max-xl:h-[300px] max-lg:w-[350px] max-lg:h-[350px] max-md:w-[300px] max-md:h-[300px]">
              <img src={data?.image} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </FormLayout>
    </div>
  );
};

export default ResumeDetail;
