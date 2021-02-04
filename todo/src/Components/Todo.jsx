import React from 'react'

function Todo({todo, index, completeTodo, removeTodo}) {
    return (
        <div style = {{textDecoration: todo.completed ? 'line-through' : ''}} className = "todo">
            {todo.text}
            <input name = "completed" type = "checkbox" onClick = {() => completeTodo(index)}/>
            <button onClick = {() => removeTodo(index)}>X</button>

        </div>
    )
}

export default Todo;

