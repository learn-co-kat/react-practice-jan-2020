import React from 'react'
import Favs from '../components/Favs'

export default function FavsContainer(props) {
    console.log(props.favs)
    return (
        <div>
            <h1>Favorite Character Container</h1>
            {props.favs.map((char, index) => {
                return <Favs character={char} key={index} />
            })}
        </div>
    )
}
