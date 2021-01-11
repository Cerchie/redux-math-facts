import React from 'react';
import {useSelector, shallowEqual} from 'react-redux'

const Math = () => {
    const {num1, num2} = useSelector(state => ({
        num1: state.num1,
         num2: state.num2
        }), shallowEqual)

    return (
        <div>
            <h3>{num1} and {num2}</h3>
            <ul>
                <li>Sum: </li>
                <li>Difference: </li>
                <li>Product: </li>
                <li>Quotient: </li>
            </ul>
        </div>
    )
}

export default Math;