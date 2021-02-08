import React from 'react'
import '../App.css';


function Todo({todo, index, completeTodo, removeTodo}) {
    return (
        <div style = {{textDecoration: todo.completed ? 'line-through' : ''}} className = "todo">
            {todo.text}
            <input id = "completed" name = "completed" type = "checkbox" onClick = {() => completeTodo(index)}/>
            <button onClick = {() => removeTodo(index)}><i class="fas fa-trash-alt"></i></button>

        </div>
    )
}

export default Todo;

