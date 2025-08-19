import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../../components/partial/Navbar";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const [documentHeight, setDocumentHeight] = useState<number | null>(null);
  const [widthLayout, setWidthLayout] = useState<string | null>(null);
  const { pathname } = useLocation();

  console.log("pathname ==>", pathname);

  const getDocumnetHeight = () => {
    setDocumentHeight(window.innerHeight);
  };

  document.addEventListener("resize", () =>
    setDocumentHeight(window.innerHeight)
  );

  useEffect(() => {
    getDocumnetHeight();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن (ms)
      once: false, // فقط یک بار اجرا بشه
    });
  }, []);

  useEffect(() => {
    setWidthLayout(pathname !== "/login" && pathname !== "/" ? "80%" : "100%");
  }, [pathname]);

  return (
    <main
      dir="rtl"
      className="panel-holder w-full h-[731px] flex font-[vazirMatn] max-lg:flex-col"
    >
      {pathname !== "/login" && pathname !== "/" && (
        <div
          className="navbar-control min-lg:h-full w-[20%]
       max-lg:w-full max-lg:flex max-lg:justify-center"
        >
          <Navbar />
        </div>
      )}
      {pathname !== "/login" && pathname !== "/" ? (
        <div className="children w-4/5 max-lg:w-full max-lg:relative max-lg:top-12 h-full bg-[#F5F7FF]">
          <Outlet />
        </div>
      ) : (
        <div className="children w-full max-lg:w-full max-lg:relative max-lg:top-12 h-full bg-[#F5F7FF]">
          <Outlet />
        </div>
      )}

      <ToastContainer />
    </main>
  );
};

export default MainLayout;
