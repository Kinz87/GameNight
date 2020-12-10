import React from 'react'
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, describe } = props
    return (
        <div className="POPOSSpace">
            <img 
            src={`${process.env.PUBLIC_URL}images/${image}`} 
            alt="Pictures" 
            alt="photo"
            />
            <h1>{name}</h1>
            <div>{describe}</div>
            <h1>Keep your eye on this space for future content...</h1>
        </div>
        )
    }
    

export default POPOSSpace