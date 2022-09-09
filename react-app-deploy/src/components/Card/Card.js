import React, { Children } from 'react';
import './Card.css';

const Card = ({title,children}) => {
    return <div className='Card'>
        <div className='CardTitle'>{title}</div>
        <div>{children}</div>
    </div>
}

export default Card;