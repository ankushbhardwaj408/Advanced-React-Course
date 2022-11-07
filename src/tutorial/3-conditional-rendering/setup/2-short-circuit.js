import React, { useState } from 'react';
import { useEffect } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('')
  const [error,setError]=useState(false)
  const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    <h1>{firstValue}</h1>
    <button className='btn' onClick={()=>setError(!error)}>Toggle</button>
    {error?<h1>Error..</h1>:<h1>Loading...</h1>}
  </>;
};

export default ShortCircuit;
