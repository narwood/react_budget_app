import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {

    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    //const [budget, setBudget] = useState('');

    const addBudget = (props) => {
        dispatch({
            type: 'ADD_BUDGET',
            payload: props,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                required='required'
                type='number'
                step='10'
                max='20000'
                id='budget'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => addBudget(event.target.value)}>
                </input>    
            </span>
        </div>
    );
};
export default Budget;
