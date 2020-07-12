import React, { useState, createContext } from 'react'

export const MovieProvider = createContext()

export const Movies = (props) => {

    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Harry Potter",
            price: 14

        },
        {
            id: 2,
            name: "Game Of Thrones",
            price: 10

        },
        {
            id: 3,
            name: "Breaking Bad",
            price: 16

        }
    ])

    return (
        <MovieProvider.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieProvider.Provider>
    )
}