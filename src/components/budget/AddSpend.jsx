import React, { useEffect, useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import { useCategoryContext, useExpenseContext, useGoalsContext } from "../utilites/globalContext";

const AddSpend = (props) => {
  const {isOpen, closeModal, setCategoryType, handleSubmit} =
    props;
    const [spendCategory, setSpendCategory] = useState([]);
  const [goals]= useGoalsContext();
  const [category]= useCategoryContext()
  const [expense, setExpense]= useExpenseContext()


    useEffect(()=>{
      goals.map((e,i)=>{
        return (e.id=category.length + 1 + i)
      })
      setSpendCategory([...category, ...goals])
    },[])


  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label className="mt-2">Category: </Form.Label>
            <Form.Control
              as="select"
              required
              onChange={(e) => {
                setCategoryType(e.target.value);
              }}
            >
              <option>Select Category</option>
              {spendCategory?.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.id}
                    onChange={(e) => {
                      setCategoryType(e.target.value);
                    }}
                  >
                    {item.name}
                  </option>
                );
              })}
            </Form.Control>

            <Form.Label className="mt-2" >Add Expense: </Form.Label>
            <Form.Control
              placeholder="Add Amount"
              type="number"
              required
              value={expense}
              onChange={(e) => {
                setExpense(Number(e.target.value));
              }}
            />

            <Button variant="primary" className="mt-2" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
        
      </Modal.Body>
    </Modal>
  );
};

export default AddSpend;
