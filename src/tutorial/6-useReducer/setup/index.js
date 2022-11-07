import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer=(state,action)=>{
if(action.type==='ADD_ITEM'){
const newpeople=[...state.people,action.payload]
return {
  ...state,
  people: newpeople,
  isModalOpen: true,
  modalContent: "Item Added",
};
}
if (action.type === "EMPTY") {
  return { ...state, isModalOpen: true, modalContent: "ADD ITEM" };
}
if (action.type === "REMOVE") {
  const newpeople=state.people.filter((per)=> (per.id!==action.payload))
  return{
    ...state,people:newpeople
  }
}
if(action.type==="CLOSE"){
return{...state,isModalOpen:false}
}
throw new Error("no matching action type");
}
const defaultState={
    people:[],
    isModalOpen:true,
    modalContent:''
  }
const Index = () => {
  
  const [name, setName] = useState("");
  const [state,dispatch]=useReducer(reducer,defaultState)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name){
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({type:'ADD_ITEM',payload:newItem})
    }else{
      dispatch({ type: "EMPTY"});
    }
setName('')
    
  }
const close=()=>{
  dispatch({type:"CLOSE"})
}
  return (
    <>
      {state.isModalOpen && <Modal closeModal={close} modalContent={state.modalContent}/>}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add item
        </button>
      </form>
      {state.people.map((per) => {
        
        return (
          <div className="item" key={per.id}>
            <h4>{per.name}</h4>
            <button onClick={()=>dispatch({type:'REMOVE',payload:per.id})}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
