import React, { useState, useContext } from 'react'
import { MovieProvider } from './MovieProvider'


const AddForm = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieProvider)
    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {id:4,name,price}])
    }

    return (
        <form action="">
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button onClick={addMovie}>Add</button>
        </form>
    )
}

export default AddForm