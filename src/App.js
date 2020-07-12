import React from 'react';
import './App.scss';
import Nav from './components/Nav'

import { Movies } from './components/MovieProvider'
import MovieList from './components/MovieList'
//import Movie from './components/Movie'


import AddForm from './components/AddMovie'

function App() {
  return (
    <Movies>
      <div className="App">
        <Nav />
        <AddForm />
        <MovieList />
      </div>
    </Movies>
  );
}

export default App;
