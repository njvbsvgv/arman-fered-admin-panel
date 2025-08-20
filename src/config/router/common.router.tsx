import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Resume from "../../components/pages/resume/Resume";
import CreateResume from "../../components/pages/create-rsume/CreateResume";
import ResumeDetail from "../../components/pages/resume-detail/ResumeDetail";
import UpdateResume from "../../components/pages/update-resume/UpdateResume";
import Login from "../../components/pages/authontication/Login";
import { AdminManagementLastWrapper } from "../../screens";
import AdminList from "../../components/pages/admin-management/AdminList";
import CreateAdmin from "../../components/pages/admin-management/CreateAdmin";

export const commonRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/resume", element: <Resume /> },
      { path: "/resume-detail/:id", element: <ResumeDetail /> },
      { path: "/create-resume", element: <CreateResume /> },
      { path: "/update-resume", element: <UpdateResume /> },
      { path: "/update-resume/:id", element: <UpdateResume /> },
      { path: "/admin-management", element: <AdminManagementLastWrapper />, children:[
        {path: "/admin-management/admin-list", element: <AdminList />},
        {path: "/admin-management/create-admin", element: <CreateAdmin />}
      ] },
    ],
  },
]);