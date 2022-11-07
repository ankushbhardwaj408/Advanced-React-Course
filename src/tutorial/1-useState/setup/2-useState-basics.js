import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText]=useState('random title');
  const [num,setNum]=useState(54);
  const clickHandler=()=>{
    setNum(45)
    if(text==='random title'){
      setText('hello world')
    }else{
      setText('random title')
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={clickHandler}>{num}</button>
  </React.Fragment>;
};

export default UseStateBasics;
