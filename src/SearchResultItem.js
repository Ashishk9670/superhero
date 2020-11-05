import React from 'react';

function SearchResultItem(props) {
    return (

        <div className="search-result">
            <div className="left">
                <img src=" https://superheroapi.com/api/1971189209689930/image" alt="super" />
            </div>

            <div className="right">
                <h1> Batman</h1>
                <div className="stats">
                    <div >strength:26</div>
                    <div>speed :60</div>
                    <div>power :60</div>
                </div>
            </div>
        </div>

    );
}

export default SearchResultItem;