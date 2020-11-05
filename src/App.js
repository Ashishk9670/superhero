

import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function App() {


  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <SearchBar />
        <SearchResult />
      </div>

    </div>
  );
}

export default App;
