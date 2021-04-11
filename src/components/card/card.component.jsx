import React from 'react'
// import {cardList} from '../../App'
import './card.styles.css'

export const Card = (props) => {
    return <div className= 'card-container'>
      <img 
      alt= "moster"
       src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`}
        />
        <h2 >{props.monster.name}</h2>
       <p> {props.monster.email} </p>
         </div>
}

   