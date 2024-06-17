import React from "react";
import { NavLink } from "react-router-dom";



export const SmallContainers = ({ title, to }) => {
  return (
    <NavLink 
      className={({ isActive }) =>
        [
          isActive ? "bg-black text-white no-underline rounded-lg px-2 py-2" : "hover:text-gray-300 text-black no-underline text-xs px-2 py-2",
        ].join(" ")
      }
      to={to}
    >
      <h6 className="mb-0">{title}</h6>
    </NavLink>
  );
};


