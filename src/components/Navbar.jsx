import React, { useEffect } from "react";
import { SmallContainers } from "./utilites/smallContainer";




const Navbar = () => {
  useEffect(()=>{
    console.log("navbar changed")
  }, [])
  return (
    <nav className="bg-transparent mb-4">
      <div className="flex justify-between items-center ">
        <div className="text-black font-bold text-xl ">Manage your expense</div>
        <div className="hidden md:flex space-x-2 text-center">
          
          <SmallContainers
            to={"/overview"} 
            title={"Overview"}
          />
          <SmallContainers
            to={"/budget"} 
            title={"Budget"}
          />
          <SmallContainers
            to={"/transaction"} 
            title={"Transactions"}
          />
          <SmallContainers
            to={"/goals"} 
            title={"Goals"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
