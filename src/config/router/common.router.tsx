import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Resume from "../../components/pages/resume/Resume";
import CreateResume from "../../components/pages/create-rsume/CreateResume";
import ResumeDetail from "../../components/pages/resume-detail/ResumeDetail";
import UpdateResume from "../../components/pages/update-resume/UpdateResume";

export const commonRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/resume", element: <Resume /> },
      { path: "/resume-detail/:id", element: <ResumeDetail /> },
      { path: "/create-resume", element: <CreateResume /> },
      { path: "/update-resume", element: <UpdateResume /> },
      { path: "/update-resume/:id", element: <UpdateResume /> },
    ],
  },
]);