import React from 'react';
import './Card.css'

let Card = (props) => {
const classes = 'Card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
