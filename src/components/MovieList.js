import React, {useState, useContext} from 'react'
import {MovieProvider } from './MovieProvider'
import Movie from './Movie'
const MovieList = () => {
    
    const [movies,setMovies] = useContext(MovieProvider)
    
    return (
        <div>
            <h1>{movies.map(movie =>(
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}</h1>
        </div>
    )
}


export default MovieList;