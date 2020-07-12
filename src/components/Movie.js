import React from 'react'

const Movie = ({ name, price, id }) => {
    return (
        <div>
            <li>{name} <b>{price}</b></li>
        </div>
    )
}

export default Movie;