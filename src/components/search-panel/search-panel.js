import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'Type here to search';
  
    return (
        <input className="search-panel form-control" 
            placeholder={searchText} />
    );
};

export default SearchPanel;