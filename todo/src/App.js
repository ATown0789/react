// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import {useSpring, useTransition, animated} from 'react-spring';


function App() {
  const [todoList, setTodoList] = useState(
    [{
      text: "my todo1",
      completed: false,
      id: 0
    },
    {
      text: "my todo 2",
      completed: false,
      id: 1
    }  
  ]); 


  let newId = 0;
   
  const addTodo = text => {
    todoList.length < 1 ?  newId = 0 :
    newId = todoList[todoList.length-1].id+1;
    const newTodoList = [...todoList, {text, id:newId}];
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

  const deleteAll = () => {
    setTodoList([]);
  }

  const todoAnimation = useTransition(todoList, item =>( item.id), {
    from: {opacity:0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 600}
  });
  
  const delAnimation = useSpring(
    {opacity: 1, 
      from: {opacity: 0},
      config: {duration: 600}
    });

  return (
    <div className="App">
          <h1>My Todo List</h1>
          <TodoForm addTodo = {addTodo} />
          {/* {todoList.map((todo, index) => (
            <Todo removeTodo = {removeTodo} completeTodo = {completeTodo} index = {index} key = {index} todo = {todo}  />
          ))} */}
          {todoAnimation.map(({item, key, props},index) => 
            <animated.div key = {key} style = {props}>
              <Todo removeTodo = {removeTodo} 
                completeTodo = {completeTodo} 
                index = {index} 
                key = {index} 
                todo = {item}  />
            </animated.div>)}
          <animated.div style = {delAnimation}>{todoList.length > 1 ? <button id = "del-all" className = "delete" onClick = {deleteAll}>Delete All</button> : null }</animated.div>
    </div>
  );
}

export default App;
