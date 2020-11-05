import React, { useState } from 'react';

function SearchBar(props) {
    console.log("props ", props);
    const { handleChange, searchText } = props;

    return (
        <div>
            <input
                id="search-bar"
                type="search"
                placeholder="Hunt superHero"
                value={searchText}
                onChange={handleChange}
            />


        </div>
    );
}

export default SearchBar;