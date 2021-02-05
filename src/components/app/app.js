import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';

const App = () => {
    const todoData = [
        { value: 'Learn React', important: false, id: 1 },
        { value: 'Build awesome App', important: true, id: 2 },
        { value: 'Drink coffee', important: false, id: 3 }
    ];

    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos={ todoData } />
      </div>
    );
};

export default App;