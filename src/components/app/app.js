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
            { value: 'Learn React', important: false, id: 1, complete: false },
            { value: 'Build awesome App', important: true, id: 2, complete: false },
            { value: 'Drink coffee', important: false, id: 3, complete: false },
            { value: 'I need to develop a lot of components in Ract. I am very happy!', important: false, id: 4, complete: false }
        ],
        term: '',
        status: 'All'
    }

    // -------------- add / delete -------------- //

    deleteTodo = (id) => {
        this.setState(({ todoData }) => ({ todoData: todoData.filter(obj => obj.id !== id) }));
    }

    addTodo = async (value) => {
        await this.idGenerate();
        const { id } = this;
        const newTodo = { value, id, important: false, complete: false };
        
        this.setState(({ todoData }) => ({ todoData: [ ...todoData, newTodo ] }));
    }

    // -------------- toggling activites -------------- //

    togglingDataActivities = (id, key) => {
        this.setState(({ todoData }) => ({todoData: [ ...todoData ].reduce((result, obj) => {
            obj[key] = obj.id === id ? !obj[key] : obj[key];
            return [ ...result, { ...obj } ];
        }, [])}));
    }

    toggleComplete = (id) => {
        this.togglingDataActivities(id, 'complete');
    }

    toggleImportant = (id) => {
        this.togglingDataActivities(id, 'important');
    }

    // -------------- search -------------- //

    setTerm = (e) => {
        const term = e.target.value.toUpperCase();
        this.setState({ term });
    }

    search = (items, term) => {
        if (!term) return items;
        return items.filter(({ value }) => value.toUpperCase().indexOf(term) >= 0);
    }

    // -------------- filter -------------- //

    setStatus = (status) => {
        this.setState({ status });
    }

    filter = (items, status) => {
        switch (status) {
            case 'All':
                return items;
            case 'Done':
                return items.filter(({ complete }) => complete);
            case 'Active':
                return items.filter(({ complete }) => !complete);
            default:
                return items;
        }
    }

    // -------------- some func -------------- //

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

    // -------------- RENDER -------------- //

    render() {
        const { todoData, term, status } = this.state;

        const filterTodo = this.filter(todoData, status);
        const renderItems = this.search(filterTodo, term);

        const done = todoData.filter(({ complete }) => complete).length;
        const toDo = todoData.length - done;

        return (
            <div className="app">
              <AppHeader 
                toDo={ toDo } 
                done={ done } />

              <div className="app-activities">
                <SearchPanel searchToDo={ this.setTerm } />
                <ItemStatusFilter setStatus={ this.setStatus } status={ status } />
              </div>

              <TodoList 
                todos={ renderItems } 
                deleteTodo={ this.deleteTodo }
                toggleComplete={ this.toggleComplete }
                toggleImportant={ this.toggleImportant } />

              <ItemAddForm addTodo={ this.addTodo } />
            </div>
          );
    }
}