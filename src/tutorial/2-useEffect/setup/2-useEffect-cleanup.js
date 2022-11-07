import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize]=useState(window.innerWidth)
  // const checkSize=()=>{
  //   setSize(window.innerWidth)
  // }
  console.log('render')
useEffect(()=>{
  console.log('useefefct')
  window.addEventListener('resize',()=>setSize(window.innerWidth))
  return ()=>{
    console.log('cleanup')
    window.removeEventListener('resize',()=>setSize(window.innerWidth))
  }
})

  return <>
  <h1>window</h1>
  <h2>{size}PX</h2>

  </>;
};

export default UseEffectCleanup;
