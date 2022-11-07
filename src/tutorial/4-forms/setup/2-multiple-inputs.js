import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, changePerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    changePerson((p) => {
      return { ...p, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.email) {
      const newperson = { ...person, id: new Date().getTime().toString() };
      setPeople( [ ...people, newperson ])
      console.log(person)
      changePerson({
        firstName: "",
        email: "",
        age: "",
      });
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={changeHandle}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={changeHandle}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={changeHandle}
            />
          </div>
          <button type="submit" >
            add person
          </button>
        </form>
        {people.map((per, index) => {
          const { id, firstName, email, age } = per;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h3>{email}</h3>
              <h2>{age}</h2>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
