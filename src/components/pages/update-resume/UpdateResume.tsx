import FormLayout from "../../partial/FormLayout";
import { CustomeBt } from "../../common";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useGetResumeWithId } from "../../../core/services/api";
import { addDataToResumeEditeState } from "../../../core/redux/slice/actions";
import EditeForm from "./EditeForm";

const UpdateResume = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(
    (state: any) => state.resumeEditeDataState.resumeEditeData
  );

  const params = useParams();
  console.log("params ==>", params);
  const { isLoading, data: editeData } = useGetResumeWithId(
    "getResumeDetail",
    `https://689e9f3a3fed484cf8778bea.mockapi.io/resumeApi/${params.id}`,
    params.id ? true : false
  );

  if (!isLoading) {
    dispatch(addDataToResumeEditeState(editeData?.data));
  }

  console.log("edite data ==>", data);

  return (
    <div className="update-resume-page-holder flex justify-center">
      <FormLayout width={90} margin={params.id ? [80, -30, 0, 0] : [200, 0, 0, 0]}>
        <div className="btn-control w-full flex justify-center">
          {!params.id ? (
            <CustomeBt
              text="لطفا ابتدا رزومه را انتخاب کنید"
              className="bg-[#4F6DF5] text-white px-8 py-4 rounded-3xl cursor-pointer"
              onClick={() => {
                navigation("/resume");
              }}
            />
          ) : (
            <EditeForm />
          )}
        </div>
      </FormLayout>
    </div>
  );
};

export default UpdateResume;
