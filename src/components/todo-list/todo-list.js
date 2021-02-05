import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos }) => {
    const elements = todos.map(({ id, ...item }) => {
        return <TodoListItem 
            key={ id }
            { ...item }  />
    });

    return <ul>{ elements }</ul>;
};

export default TodoList;