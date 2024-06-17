
import {useCategoryContext} from "../utilites/globalContext"
import AddCatgeory from "../utilites/AddCategory";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateModal from "../utilites/CreateModal";



const Budget = () => {
  const [category, setCategory] = useCategoryContext();
  

  return (
    <AddCatgeory
    value={category}
    setValue={setCategory}
    title1="Create a Budget" 
    title2="Save more by setting a budget"
    title3="My Budget"
    type1= "Category"
    type2="Add Amount"
    AddNewValueComponent={CreateModal}
    />
   
  );
};

export default React.memo(Budget);
