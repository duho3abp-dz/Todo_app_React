import React from 'react';

const TodoListItem = ({ 
    value, 
    important = false 
}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };
    
    return <li style={ style }>{ value }</li>;
};

export default TodoListItem;