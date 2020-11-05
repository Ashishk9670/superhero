

import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function App() {

  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHero() {
    const response = await fetch(`https://superheroapi.com/api.php/1971189209689930/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeros -> data", data);
    setSuperheroData(data.results);
  }

  function handleChange(e) {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHero();
    }
  }


  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <SearchBar
          searchText={searchText}
          handleChange={handleChange}
        />
        <SearchResult
          superheroData={superheroData}

        />
      </div>

    </div>
  );
}

export default App;
