import React, { useEffect } from 'react';

const Modal = ({closeModal,modalContent}) => {
  useEffect(()=>{
    setTimeout(()=>{
closeModal();
    },2000)
  })
  
  return <>
    <div>
      <h4>{modalContent}</h4>
    </div>
  </>;
};

export default Modal;
