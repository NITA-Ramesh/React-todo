
import React, { useState } from 'react';

const AddToDo = ({ AddTodo: setTodo }) => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddToDo;
