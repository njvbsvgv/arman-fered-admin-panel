import type { TCard } from "../../../../core/types/TCard";
import { CustomeBt } from "../../../common";

const Card = ({ image, title, description, onClick }: TCard) => {
  return (
    <div
      data-aos="zoom-out-down"
      className="card w-[267px] h-[400px] bg-[#F9F9FC] shadow-[0_4px_6px_0_#D5D5D5]
    rounded-2xl overflow-hidden"
    >
      <div className="pic-control w-full h-3/5">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="information-control">
        <p
          className="w-full max-h-[70px] overflow-hidden
        text-ellipsis text-[#1F2937] font-extrabold relative right-2 top-2"
        >
          {title}
        </p>
        <p className="relative right-2 max-w-[80%] mt-4 max-h-[50px] line-clamp-2
        overflow-hidden text-ellipsis" title={description}>{description}</p>
        <CustomeBt
          text="مشاهده"
          className="text-white bg-[#4F6DF5] w-2/4 mt-6 overflow-hidden
            flex justify-center items-center gap-x-2
            rounded-tl-2xl rounded-bl-2xl cursor-pointer"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
