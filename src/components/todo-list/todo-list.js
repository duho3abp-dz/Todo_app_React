import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, deleteTodo }) => {
    const elements = todos.map(({ id, ...item }) => {
        return (
            <TodoListItem 
                deleteTodo={ () => deleteTodo(id) }
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