import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (<div className="todo-list">
        <TodoForm dispatch={dispatch}/>
        {state.map(todo => {
            return (
                <Todo 
                key={todo.id}
                todo={todo}
                dispatch={dispatch}
                />
            )
        })}
    </div>
    )
}

export default TodoList;

