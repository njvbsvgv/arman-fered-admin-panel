import React from "react";
import type { TAdminCard } from "../../../core/types/TAdminCard";

const AdminCard: React.FC<TAdminCard> = ({ name, isActive }) => {
  return (
    <div className="admin-card-control w-full p-3 border border-[#E5E7EB] rounded-2xl flex justify-evenly items-center">
      <h1 className="name text-xl">{name}</h1>
      <h2 className={`isActive ${isActive ? "active" : "notActive"}`}>
        {isActive ? "فعال" : "غیرفعال"}
      </h2>
    </div>
  );
};

export default AdminCard;
