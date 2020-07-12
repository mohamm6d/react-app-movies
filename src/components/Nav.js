import React,{useContext} from 'react';
import { MovieProvider } from './MovieProvider';

const Nav = () => {
    
    const [movies,setMovies] = useContext(MovieProvider)
    
    return (
        <header>
            <h1>Movies List</h1>
    <b>Number of movies: {movies.length}</b>
        </header>
    )
}

export default  Nav;