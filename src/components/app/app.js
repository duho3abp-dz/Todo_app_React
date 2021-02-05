import React from 'react';
import './app.css'

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

const App = () => {
    const todoData = [
        { value: 'Learn React', important: false, id: 1 },
        { value: 'Build awesome App', important: true, id: 2 },
        { value: 'Drink coffee', important: false, id: 3 }
    ];

    return (
      <div className="app">
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList todos={ todoData } />
      </div>
    );
};

export default App;