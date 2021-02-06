import React from 'react';
import './search-panel.css'

const SearchPanel = ({ searchToDo }) => {
    return (
        <input className="search-panel form-control" 
            placeholder="Type here to search"
            onChange={ searchToDo } />
    );
};

export default SearchPanel;