import React from "react";
import AddCatgeory from "../utilites/AddCategory";
import CreateModal from "../utilites/CreateModal";
import { useGoalsContext } from "../utilites/globalContext";


const Goals = () => {
  const [goals, setGoals] = useGoalsContext()  


  
  return (
    <AddCatgeory
    value={goals}
    setValue={setGoals}
    title1="Create Goals" 
    title2={"Reach More Goals"}
    title3={"Active Goals"}
    type1= "Goals"
    type2="Add Budget"
    AddNewValueComponent={CreateModal}

    />
  );
};

export default Goals;
