import React, { useState } from 'react';
import {data} from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople]=useState(data)
  const removePerson=(id)=>{
    setPeople((people)=>{
return people.filter((per)=>per.id!==id)
    })
  }
  return <>
    <h1>Prop drilling</h1>
    <List people={people} removePerson={removePerson}></List>
  </>;
};
const List=({people,removePerson})=>{
  return<>
   {people.map((person)=>{
    return <SinglePerson key={people.id} {...person} removePerson={removePerson}></SinglePerson>
   })}
  </>
}
const SinglePerson=({name,id,removePerson})=>{
return(
  <div className="item">
    <h4>{name}</h4>
    <button onClick={()=>removePerson(id)}>remove</button>
  </div>
)
}
export default PropDrilling;
