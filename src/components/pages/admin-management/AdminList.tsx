import { useSelector } from "react-redux";
import AdminCard from "./AdminCard";

const AdminList = () => {
  const adminData = useSelector((state: any) => state.adminDataState.adminData);
  console.log("adminData ==>", adminData);
  return (
    <div
      className="admin-list-container p-1.5 border rounded-2xl border-[#E5E7EB]"
      data-aos="fade-down"
    >
      <div className="admin-list-control max-h-[300px] overflow-y-scroll p-3">
        {adminData?.map((item: any, index: number) => {
            return <AdminCard name={item.fullNamFa} isActive={item.isActive} key={index}/>
        })}
      </div>
    </div>
  );
};

export default AdminList;
