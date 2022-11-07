import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show,setShow]=useState(false)
  return <>
    <h1>ankush</h1>
    <button className='btn' onClick={()=>setShow(!show)}>Show/Hide</button>
    {show && <Item/> }
  </>
};
const Item=()=>{
  const [size, setSize] = useState(window.innerWidth);
 useEffect(() => {
   
   window.addEventListener("resize", () => setSize(window.innerWidth));
   return () => {
    
     window.removeEventListener("resize", () => setSize(window.innerWidth));
   };
 },[]);
  return <>
<div style={{margin:'2rem'}}>
<h1>window</h1>
<h3>size:{size}</h3>
</div>
  </>
}

export default ShowHide;
