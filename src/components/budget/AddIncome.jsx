import React from 'react'
import Form from "react-bootstrap/Form";

const AddIncome = (props) => {
  const {setIncome, income} = props

  
   
  return (
    
    <Form>
    <Form.Control
    placeholder="value"
      type="number"
      required
      value={income}
      onChange={(e) => setIncome(Number(e.target.value))}
      autoFocus
    />
    </Form>

    
    
    
  
) 
}

export default AddIncome