import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, region, population } = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <p>{area}</p>
            <p>{region}</p>
            <p>{population}</p>



        </div>
    )
};

export default Country;