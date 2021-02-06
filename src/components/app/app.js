import React, { Component } from 'react';
import './app.css'

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {
    state = {
        todoData: [
            { value: 'Learn React', important: false, id: 1 },
            { value: 'Build awesome App', important: true, id: 2 },
            { value: 'Drink coffee', important: false, id: 3 },
            { value: 'I need to develop a lot of components in Ract. I am very happy!', important: false, id: 4 }
        ]
    }

    deleteTodo = id => {
        const { todoData } = this.state;
        const newTodoData = todoData.filter(obj => obj.id !== id);
        this.setState({ todoData: newTodoData });
    }

    render() {
        const { todoData } = this.state;

        return (
            <div className="app">
              <AppHeader />
              <SearchPanel />
              <ItemStatusFilter />

              <TodoList 
                todos={ todoData } 
                deleteTodo={ this.deleteTodo } />
            </div>
          );
    }
}