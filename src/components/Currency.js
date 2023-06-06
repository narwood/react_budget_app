import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    
    const { dispatch } = useContext(AppContext);

    const setCurrency = (props) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: props
        })
    }

    return (
        <div className='alert alert-secondary'>
        <label for='inputGroupSelect01'>Currency:</label>
        <select className='custom-select' id='inputGroupSelect01' onChange={(event) => setCurrency(event.target.value)} style={{ marginLeft: '1rem', color: 'white', backgroundColor: 'green'}}>
            <option value="$" label="$ Dollar" style={{color: 'black', colo: 'yellow'}}>Currency ($ Dollar)</option>
            <option defaultValue value="£" label="£ Pound" style={{color: 'black'}}>Currency (£ Pound)</option>
            <option value="€" label="€ Euro" style={{color: 'black'}}>Currency(€ Euro)</option>
            <option value="₹" label="₹ Ruppee" style={{color: 'black'}}>Currency(₹ Ruppee)</option>
        </select>
        </div>
    )
};
export default Currency;