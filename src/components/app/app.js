import React, { Component } from 'react';
import './app.css'

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
    id = 0
    state = {
        todoData: [
            { value: 'Learn React', important: false, id: 1, complete: false, see: true },
            { value: 'Build awesome App', important: true, id: 2, complete: false, see: true },
            { value: 'Drink coffee', important: false, id: 3, complete: false, see: true },
            { value: 'I need to develop a lot of components in Ract. I am very happy!', important: false, id: 4, complete: false, see: true }
        ],
        
    }

    deleteTodo = id => {
        this.setState(({ todoData }) => ({ todoData: todoData.filter(obj => obj.id !== id) }));
    }

    addTodo = async value => {
        await this.idGenerate();
        const { id } = this;
        const newTodo = { value, id, important: false, complete: false, see: true };
        
        this.setState(({ todoData }) => ({ todoData: [ ...todoData, newTodo ] }));
    }

    idGenerate = () => {
        const { todoData } = this.state;

        const randomCount = () => {
            const random = Math.floor(Math.random() * (10000 - 1) + 1);
            const coincidences = todoData.filter(({ id }) => id === random);

            if (coincidences.length) { 
                randomCount(); 
            } else this.id = random;
        };
        randomCount();
    }

    togglingDataActivities = (id, key) => {
        this.setState(({ todoData }) => ({todoData: [ ...todoData ].reduce((result, obj) => {
            obj[key] = obj.id === id ? !obj[key] : obj[key];
            return [ ...result, { ...obj } ];
        }, [])}));
    }

    toggleComplete = id => this.togglingDataActivities(id, 'complete');

    toggleImportant = id => this.togglingDataActivities(id, 'important');

    searchToDo = e => {
        const searchValue = e.target.value.toUpperCase();
        this.setState(({ todoData }) => ({ todoData: [ ...todoData ].reduce((result, obj) => {
            obj.see = obj.value.toUpperCase().indexOf(searchValue) >= 0 ? true : false;
            return [ ...result, { ...obj } ];
        }, [] )}));
    }

    render() {
        const { todoData } = this.state;

        const done = todoData.filter(({ complete }) => complete).length;
        const toDo = todoData.length - done;

        return (
            <div className="app">
              <AppHeader 
                toDo={ toDo } 
                done={ done } />

              <div className="app-activities">
                <SearchPanel searchToDo={ this.searchToDo }/>
                <ItemStatusFilter />
              </div>

              <TodoList 
                todos={ todoData } 
                deleteTodo={ this.deleteTodo }
                toggleComplete={ this.toggleComplete }
                toggleImportant={ this.toggleImportant } />

              <ItemAddForm addTodo={ this.addTodo } />
            </div>
          );
    }
}