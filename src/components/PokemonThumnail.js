import React from 'react'

const PokemonThumnail = ({id, name, image, type}) => {

    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number">
    <small>#0{id}</small>

            </div>
            <img src={image} alt={name}/>
    <h3>{name}</h3>
    <small>{type}</small>
        </div>
    )
}

export default PokemonThumnail
