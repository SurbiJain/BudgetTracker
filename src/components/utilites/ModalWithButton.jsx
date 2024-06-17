import React, { useState } from 'react'
const [isOpen, setIsOpen] = useState(false)


const ModalDialog  = ()=>{
  return (
    <Modal  onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
  )
}

const ModalWithButton = (title, renderComponent, renderChildren) => {
  return (
    <>
    <button onClick={()=>{setIsOpen(true)}}>{title}</button>
   { isOpen ?  : ""}
    {/* {
      isOpen ? {renderComponent} : {renderChildren}
    } */}
    </Modal.Body>
    </Modal>
    </>
  )
}

export default ModalWithButton