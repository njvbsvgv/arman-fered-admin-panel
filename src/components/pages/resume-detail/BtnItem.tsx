import { CustomeBt } from "../../common";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useDeleteResume } from "../../../core/services/api/delete/useDeleteResume";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

type TBtnItem = {
  id: string | number;
  data: object
};

const BtnItem = ({ id, data }: TBtnItem) => {
  const navigation = useNavigate();
  const dispatch = useDispatch()
  const { mutate } = useDeleteResume(
    "deleteResume",
    `https://689e9f3a3fed484cf8778bea.mockapi.io/resumeApi/${id}`
  );
  const deleteHadnelr = () => {
    mutate();
  };

  const editeClickHandler = () => {
    // dispatch(addDataToResumeEditeState(data))
    navigation(`/update-resume/${id}`);
  };

  return (
    <div className="btn-control flex mt-15 gap-x-3 max-md:justify-center">
      <CustomeBt
        text="ویرایش"
        icon={<RiEdit2Fill />}
        className="bg-[#4F6DF5] text-white text-[15px] flex items-center gap-x-2.5
        px-6 rounded-2xl cursor-pointer hover:shadow-[0_1px_16px_0_#4F6DF5] transition-all"
        onClick={editeClickHandler}
      />
      <CustomeBt
        text="حذف"
        icon={<MdDelete />}
        className="bg-[#f54f4f] text-white text-[15px] flex items-center gap-x-2.5
        px-6 rounded-2xl cursor-pointer hover:shadow-[0_1px_16px_0_#f54f4f] transition-all"
        onClick={deleteHadnelr}
      />
    </div>
  );
};

export default BtnItem;
