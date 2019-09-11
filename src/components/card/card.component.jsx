import React, { Component } from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="payna"/>
        <h2 className='card-container'>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
     </div>
);