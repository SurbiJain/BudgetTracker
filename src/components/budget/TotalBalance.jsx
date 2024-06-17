import React from "react";
import { useBalanceContext } from "../utilites/globalContext";


const TotalBalance = () => {
  

const [totalBalance] = useBalanceContext()
  return (
    <div className="container1 mt-5  h-40 content-center rounded-t-lg">
      <div>Total Balance</div>
      <div>{totalBalance} INR</div>
    </div>
  );
};

export default TotalBalance;
