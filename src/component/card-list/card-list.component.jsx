import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card.component';


export const CardList = props => {
{/* Lo que hace children es tomar basicamente lo que le mande desde la app
    return <div className='card-list'>{props.children}</div>*/}
    return <div className='card-list'>
        {props.monstruos.map(monstruo=>(
            <Card key={monstruo.id} monstruo={monstruo}/>
        ))}
    </div>
}