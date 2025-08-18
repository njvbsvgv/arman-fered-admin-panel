import React, { useEffect, useState } from "react";
import { navbarData } from "../../core/constant";
import CustomeBt from "../common/CustomeBtn";
import { useLocation, useNavigate } from "react-router";
import { TitleText } from "../common";

const Navbar = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [pathNameState, setPathNameState] = useState<string | null>(null);

  const calc = () => {
    const validation = Number(
      pathname.slice(pathname.length - 1, pathname.length)
    );
    if (!isNaN(validation)) {
      const newPathName = pathname.slice(0, pathname.length - 2);
      setPathNameState(newPathName);
    } else {
      setPathNameState(pathname);
    }
  };

  useEffect(() => {
    calc();
  }, [pathname]);

  return (
    <div className="navbar-holdering w-full flex flex-col items-center">
      <div className="title-control relative top-7 min-lg:right-3 max-lg:flex max-lg:justify-center">
        <TitleText title="مدیریت سایت شخصی" fontSize={20} color="#1F2937" />
      </div>
      <div
        className="navbar w-full min-lg:h-full min-lg:border-l border-[#E5E7EB] bg-[#FFFFFF] pr-4 pt-10
     max-lg:w-[80%] max-lg:pr-0 max-lg:flex max-lg:overflow-x-scroll max-lg:rounded-3xl"
      >
        <div className="item-control flex min-lg:flex-col items-start min-lg:gap-y-8 max-lg:gap-x-8 mt-8">
          {navbarData.map((item, index) => {
            console.log(item);
            return (
              <CustomeBt
                key={index}
                text={item.name}
                className={`min-lg:w-4/5 max-lg:w-[181px] p-3 pb-3.5 text-[#1F2937] font-medium shrink-0
              border border-[#E5E7EB] cursor-pointer rounded-3xl ${
                pathNameState && item.navLink2.includes(pathNameState)
                  ? "bg-[#4F6DF5] text-white"
                  : ""
              }
              hover:bg-[#4F6DF5] haver:border-[#4F6DF5] hover:text-white transition-all`}
                onClick={() => navigation(item.navLink)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
