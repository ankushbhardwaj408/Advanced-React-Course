import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
const Context=React.createContext()
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <Context.Provider value={{removePerson,people}}>
      <h3>Context Api</h3>
      <List  />
    </Context.Provider>
  );
};

const List = () => {
  const {people}=useContext(Context)
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
           
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  const {removePerson}=useContext(Context)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
