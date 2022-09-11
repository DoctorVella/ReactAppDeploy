import React from 'react';
import './Card.css';

const Card = ({title,titleCss,children}) => {
    return <div className='Card'>
        <div className={'CardTitle' + (titleCss ? (" " + titleCss) : "")}>{title}</div>
        <div>{children}</div>
    </div>
}

export default Card;