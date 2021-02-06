import React from 'react';
import './app-header.css'

const AppHeader = ({ toDo, done }) => {
    return (
        <div className="app-header-wrap">
            <h1 className="app-header">My Todo List</h1>
            <span className="app-header-status">{ toDo } more to do, { done } done</span>
        </div>
    )
};

export default AppHeader;