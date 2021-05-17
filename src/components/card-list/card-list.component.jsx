/*
------------------------------
Package:
File: card-list.component.jsx
Author: cdev@apple.com
Date: 14/05/2021
Time: 14:43
------------------------------
*/

import React from 'react';

import './card-list.styles.css'
import {Card} from '../card/card.component';


export const CardList = props => (
    <div className='card-list'>
        {
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
            ))}
    </div>
);