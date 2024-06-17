import React, { useState } from "react";
import Button from "react-bootstrap/button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Container from "./Container";

export const AddCatgeory = (props) => {
  const {
    value,
    setValue,
    title1,
    title2,
    title3,
    AddNewValueComponent,
    type1,
    type2,
  } = props;
  const [open, setOpen] = useState(false);

  console.log("New Category  is created");
  return (
    <Container>
      <Button
        className="bg-transparent mb-4 text-black !text-left  shade   border"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="flex justify-between py-2">
          <div>
            <h6> {title1}</h6>
            <div className="text-xs">{title2}</div>
          </div>
          <AddBoxIcon sx={{ fontSize: 40 }} />
        </div>
      </Button>
      <h6 className="font-bold">{title3}</h6>
      {open && (
        <AddNewValueComponent
          isOpen={() => {
            setOpen(true);
          }}
          setOpen={setOpen}
          type1={type1}
          type2={type2}
          value={value}
          setValue={setValue}
          closeModal={() => {
            setOpen(false);
          }}
        />
      )}

      {value.map((item) => (
        <div
          key={item.id}
          className="flex justify-around container3 bg-transparent py-4 mb-3 text-black !text-left  shade   border"
        >
          <div>{item.name}</div>
          <div>
            {item.spend ? item.spend : 0} / {item.budget} INR
          </div>
          <div>
            {" "}
            <button
              onClick={() => {
                setValue(value.filter((a) => a.name !== item.name));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default AddCatgeory;
