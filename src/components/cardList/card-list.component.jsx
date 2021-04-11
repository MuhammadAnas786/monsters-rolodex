import React from 'react'
import {Card, card} from '../card/card.component'
import './card-list.styles.css'

export const CardList = (props) => {
    // console.log(props.monsters);
    return <div className = 'card-list'>
       {
        props.monsters.map(monsters=>{
          return <Card key = {monsters.name} monster = {monsters} />
        })
      }
         </div>
}

   