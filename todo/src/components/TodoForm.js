import React, {useState} from 'react';

const TodoForm = ({dispatch}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewTodo('');
        dispatch({ type: 'ADD_TODO', payload: newTodo})
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED'})
    }

    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit}>
                <input className="todo-input"
                type="text"
                id="todo"
                name="todo" 
                placeholder="add a todo"
                value={newTodo}
                onChange={handleChanges} required/>
                <button type="submit" className="todo-button">Add Todo</button>
                <button onClick={clearCompleted} className="clear-completed-button">Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;