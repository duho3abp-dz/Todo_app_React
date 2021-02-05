import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos }) => {
    const elements = todos.map(({ id, ...item }) => {
        return (
            <TodoListItem 
                key={ id }
                { ...item }  />
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;