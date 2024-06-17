import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import { useExpenseContext } from "./globalContext";

const CreateModal = (props) => {
  const {
    closeModal,
    isOpen,
    setOpen,
    value,
    setValue,
    type1,
    type2,
  } = props;
  const [expense, setExpense] = useExpenseContext();
  const [newValue, setNewValue] = useState("");
  const [amount, setAmount] = useState("");
  console.log("Modal is rendered");


  const handleSubmit = (event) => {
    event.preventDefault();

    const addCat = () => {
      setValue([
        ...value,
        {
          id: value.length++,
          name: newValue,
          budget: amount,
          spend: expense ? expense : 0,
        },
      ]);
    };

    if (value.length) {
      let found = false;
      for (let i = 0; i < value.length; i++) {
        if (value[i].name == newValue) {
          found = true;
          value[i].budget = value[i].budget + amount;
          break;
        }
      }
      if (!found) {
        addCat();
      }
    } else {
      addCat();
    }

    setOpen(false);
  };

  let array = [type1, type2];
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label className="mt-2">{type1}: </Form.Label>
            <Form.Control
              type="text"
              placeholder={type1}
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              required
              name={type1}
            />
            <Form.Label className="mt-2 ">{type2}: </Form.Label>

            <Form.Control
              placeholder={type2}
              name={type2}
              type="number"
              required
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
            <Button
              className="mt-2"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateModal;
