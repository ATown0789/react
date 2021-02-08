import React from 'react';
import '../App.css';





function Todo({stuff, todo, index, completeTodo, removeTodo}) {
    console.log(stuff);
    return (
        
        <div style = {{textDecoration: todo.completed ? 'line-through' : ''}} className = "todo">
            <input id = "completed" name = "completed" type = "checkbox" onClick = {() => completeTodo(index)}/>
            <span id ="todo-text">{todo.text}</span>
            <button className = "delete" onClick = {() => removeTodo(index)}><i className="fas fa-trash-alt"></i></button>
        </div>

//This is a working animation for just the entrance of the todo
// const todoAnimation = useSpring({
//     from: {opacity: 0},
//     to: {opacity: 1},
//     config: {duration: 600}
// });

// return (
//     <animated.div style = {todoAnimation}>
//     <div style = {{textDecoration: todo.completed ? 'line-through' : ''}} className = "todo">
//         <input id = "completed" name = "completed" type = "checkbox" onClick = {() => completeTodo(index)}/>
//         <span id ="todo-text">{todo.text}</span>
//         <button className = "delete" onClick = {() => removeTodo(index)}><i class="fas fa-trash-alt"></i></button>
//     </div>
//     </animated.div>
// )
)
}

export default Todo;

