import React from "react"
import './card.style.css'

export const Card = props => (
    <div className="card-container">
        <img
        alt="Monstruos"
        src={`https://robohash.org/${props.monstruo.id}?set=set4&size=180x180`}
        />
        <h2>{props.monstruo.name}</h2>
        <p>{props.monstruo.email}</p>
    </div>
)