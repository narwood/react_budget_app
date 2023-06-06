import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {

    const { dispatch, budget, currency } = useContext(AppContext);
    

    const setBudget = (props) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: props,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <label for='budget'>Budget: {currency}</label>
            <input
            required='required'
            type='number'
            step='10'
            id='budget'
            value={budget}
            onChange={(event) => setBudget(event.target.value)}>
            </input>    
            
        </div>
    );
};
export default Budget;
