// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm'


function App() {
  const [todoList, setTodoList] = useState(
    [{
      text: "my todo1",
      completed: false
    },
    {
      text: "my todo 2",
      completed: false
    }  
  ]); 

   
  const addTodo = text => {
    const newTodoList = [...todoList, {text}];
    setTodoList(newTodoList);
  }

  const completeTodo = index => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  }

  const removeTodo = index => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
          <h1>My Todo List</h1>
          <TodoForm addTodo = {addTodo} />
          {todoList.map((todo, index) => (
            <Todo removeTodo = {removeTodo} completeTodo = {completeTodo} index = {index} key = {index} todo = {todo}  />
          ))}
    </div>
  );
}

export default App;
