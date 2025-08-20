import type { TArrayObj } from "../types/TArrayObj";

export const navbarData = [
  {
    id: 1,
    name: "اطلاعات شخصی",
    icon: "",
    navLink: "/information",
    navLink2: "/information",
  },
  {
    id: 2,
    name: "رزومه ها",
    icon: "",
    navLink: "/resume",
    navLink2: "/resume /resume-detail",
  },
  {
    id: 3,
    name: "ساخت رزومه",
    icon: "",
    navLink: "/create-resume",
    navLink2: "/create-resume",
  },
  {
    id: 4,
    name: "بروزرسانی رزومه",
    icon: "",
    navLink: "/update-resume",
    navLink2: "/update-resume",
  },
  {
    id: 5,
    name: "مدیریت ادمین ها",
    icon: "",
    navLink: "/admin-management/admin-list",
    navLink2: ["/admin-management", "/admin-management/admin-list", "/admin-management/create-admin"],
  },
  {
    id: 6,
    name: "خروج",
    icon: "",
    navLink: "/login",
    navLink2: "/login",
  },
];
