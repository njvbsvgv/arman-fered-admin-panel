import FormLayout from "../../partial/FormLayout";
import HeadeBtn from "./HeadeBtn";
import { Outlet } from "react-router";
import { useGetAdminList } from "../../../core/services/api";

const AdminManagement = () => {
  useGetAdminList(
    "getAdminList",
    "https://68a44ae2c123272fb9b221a5.mockapi.io/loginApi"
  );

  return (
    <div className="admin-management-page-holder w-full flex flex-col items-center">
      <HeadeBtn />
      <FormLayout width={80} margin={[30, 0, 0, 0]}>
        <Outlet />
      </FormLayout>
    </div>
  );
};

export default AdminManagement;
