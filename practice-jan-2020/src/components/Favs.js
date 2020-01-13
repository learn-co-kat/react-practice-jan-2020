import React from 'react'

export default function Favs(props) {
    console.log(props.character)
    return (
        <div>
            <h3> {props.character.name} </h3>
        </div>
    )
}
