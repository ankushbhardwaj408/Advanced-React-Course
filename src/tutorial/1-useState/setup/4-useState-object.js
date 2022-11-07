import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]=useState({
    name:'ankuhs',
    age:21,
    message:'a good coder'
  })
  const change=()=>{
    person.message='hola'
    setPerson({...person})
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>{person.message}</h4>
    <button className='btn' onClick={change}>cng</button>
  </>;
};

export default UseStateObject;
