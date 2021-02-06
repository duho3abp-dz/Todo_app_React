import React, { Component } from 'react';
import './app.css'

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

export default class App extends Component {
    state = {
        id: 0,
        todoData: [
            { value: 'Learn React', important: false, id: 1 },
            { value: 'Build awesome App', important: true, id: 2 },
            { value: 'Drink coffee', important: false, id: 3 },
            { value: 'I need to develop a lot of components in Ract. I am very happy!', important: false, id: 4 }
        ]
    }

    deleteTodo = id => {
        this.setState(({ todoData }) => ({ todoData: todoData.filter(obj => obj.id !== id) }));
    }

    addTodo = async value => {
        await this.idGenerate();

        const { todoData, id } = this.state;
        const newTodo = { value, id, important: false };
        
        this.setState((state) => ({ todoData: [ ...todoData, newTodo ] }));
    }

    idGenerate = () => {
        const { todoData } = this.state;

        const randomCount = () => {
            const random = Math.floor(Math.random() * (10000 - 1) + 1);
            const coincidences = todoData.filter(({ id }) => id === random);

            if (coincidences.length) { 
                randomCount(); 
            } else this.setState({ id: random });
        };
        randomCount();
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

              <AddItem addTodo={ this.addTodo } />
            </div>
          );
    }
}