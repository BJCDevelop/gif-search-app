import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'


function App() {
  const [search, setSearch] = useState('');

  // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
  const gf = new GiphyFetch('Uj8eQvhPipDIRtP667gtJkzQcV6dY7Mq')

  // configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
  const fetchGifs = (offset: number) => gf.search(search, { offset, limit: 10 })

  function updateSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <main className='Gif-search-app'>
      <h1>Busca el gif que desees :D</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          value={search}
          onChange={updateSearch}
        />
      </div>
      <h3>Your Enter Value is: {search} </h3>
      <div className="results">
        {search && <Grid width={800} columns={3} fetchGifs={fetchGifs} />}
      </div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </main>
  );
}

export default App;
