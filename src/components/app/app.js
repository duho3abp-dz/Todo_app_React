import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';

const App = () => {
    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
      </div>
    );
};

export default App;