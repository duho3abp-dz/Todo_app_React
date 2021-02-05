import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = () => {
    const items = ['Learn React', 'Build awesome App'];

    const result = items.map((item, i) => <TodoListItem key={ i } value={ item }/>);

    return <ul>{ result }</ul>;
};

export default TodoList;