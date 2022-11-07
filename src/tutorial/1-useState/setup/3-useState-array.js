import React, { useState } from 'react';
import { data } from '../../../data';


const UseStateArray = () => {
  const [people,setPeople]=useState(data);
const deletepeople=(id)=>{
  // let newpeople=people.filter((p)=>p.id!==id);
  setPeople((old)=>old.filter((p)=>p.id!==id))
};
  return <>
    {people.map((person)=>{
      const {id,name}=person;
return <div key={id} className='item'>
  <h4>{name}</h4>
  <button className='btn' onClick={()=>deletepeople(id)}>remove</button>
</div>;
    })}
    <button className='btn' onClick={()=>setPeople([])}>clear</button>
  </> 
};

export default UseStateArray;
