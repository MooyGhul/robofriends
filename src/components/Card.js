import React from 'react';

const Card = ({id, email, name}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
            <img alt='Robots' src={`http://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;