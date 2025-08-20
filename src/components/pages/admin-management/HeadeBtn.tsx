import { CustomeBt } from "../../common";
import { useLocation, useNavigate } from "react-router";

const HeadeBtn = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate()
  return (
    <div className="btn-control w-4/5 flex justify-start gap-x-5 mt-20">
      <CustomeBt
        text="لیست ادمین ها"
        className={`${
          pathname === "/admin-management/admin-list"
            ? "activeBtn"
            : "notActiveBtn"
        }`}
        dataAos="flip-left"
        onClick={() => navigation("/admin-management/admin-list")}
      />
      <CustomeBt
        text="ساخت ادمین جدید"
        className={`${
          pathname === "/admin-management/create-admin"
            ? "activeBtn"
            : "notActiveBtn"
        }`}
        dataAos="flip-right"
        onClick={() => navigation("/admin-management/create-admin")}
      />
    </div>
  );
};

export default HeadeBtn;
