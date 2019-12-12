//This is where the card is to be rendered
import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
  </div>
);

export default Card;