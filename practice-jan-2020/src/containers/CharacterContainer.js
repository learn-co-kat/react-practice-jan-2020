import React from 'react'
import Character from '../components/Character.js'

const CharacterContainer = (props) => {

        return (
            <div>
                <h1>Character Container</h1>
                {props.charList.map((character, index) => {
                   return <Character character={character} key={index} like={props.like} />
                })}
            </div>
        )
}

export default CharacterContainer

