import React from "react";

const Todo = ({dispatch, todo}) => {

    const toggleCompleted = e => {
        e.preventDefault();
        dispatch({ type: 'COMPLETED_TODO', payload: todo.id})
    }
    return (
        <div onClick={toggleCompleted} 
        className={`todo ${todo.completed ? ' completed' : ''}`}>
             <p>{todo.item}</p>
        </div>
    )
}

export default Todo;