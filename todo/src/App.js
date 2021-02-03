// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input 
        className = "input"
        type = "text"
        value = {value}
        onChange = {e => setValue(e.target.value)}></input>
      <button type = "submit" value = "submit">Add Todo</button>
  </form>
  )
}

function App() {

  const [todoList, setTodoList] = useState(
    [{
      text: "my todo1",
      completed: false
    },
    {
      text: "my todo 2",
      completed: true
    }  
  ]); 

   
  const addTodo = todoText => {
    const newTodoList = [...todoList, {todoText}];
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
          <h1>My Todo List</h1>
          <TodoForm addTodo = {addTodo} />
          {todoList.map((todo, index) => (
            <Todo key = {index} todo = {todo}  />
          ))}
    </div>
  );
}

export default App;
