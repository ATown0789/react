import React from 'react';
import {useState, useRef, useEffect} from 'react';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const inputRef = useRef();
    useEffect(() => {
      inputRef.current.focus();
    })
  
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return
      addTodo(value);
      setValue('');
    }
  
    return(
      <form onSubmit = {handleSubmit}>
        <input 
          ref = {inputRef}
          className = "input"
          placeholder = "Add your todo..."
          type = "text"
          value = {value}
          onChange = {e => setValue(e.target.value)}></input>
        <button type = "submit" value = "submit">Add</button>
    </form>
    )
  }
  


export default TodoForm;

