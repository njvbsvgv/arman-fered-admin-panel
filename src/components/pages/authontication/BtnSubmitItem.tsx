import { BtnLoading, CustomeBt } from "../../common";

interface TBtn {
  isLoading: boolean;
}

const BtnSubmitItem = ({ isLoading }: TBtn) => {
  return (
    <>
      {!isLoading ? (
        <CustomeBt
          text="ورود"
          className="bg-[#4F6DF5] w-4/5 rounded-2xl text-white cursor-pointer my-6"
          type="submit"
        />
      ) : (
        <BtnLoading
          className="bg-[#4F6DF5] w-4/5 py-2 flex flex-row-reverse justify-center
        rounded-2xl text-white cursor-pointer my-6"
        />
      )}
    </>
  );
};

export default BtnSubmitItem;
