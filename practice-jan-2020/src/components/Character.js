import React, { Component } from 'react'

const Character = (props) => {
        return (
            <div>
                <h3> Name: {props.character.name} </h3>
                <button onClick={() => props.like(props.character)}>Add me to your fav list</button>
            </div>
        )
}

export default Character