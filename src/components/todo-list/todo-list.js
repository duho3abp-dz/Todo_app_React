import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({ 
    todos,
    deleteTodo, 
    toggleComplete,
    toggleImportant
}) => {
    const elements = todos.map(({ id, see, ...item }) => {
        return (
            <TodoListItem 
                deleteTodo={ () => deleteTodo(id) }
                key={ id }
                { ...item }
                toggleComplete={ () => toggleComplete(id) } 
                toggleImportant={ () => toggleImportant(id) } />
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;