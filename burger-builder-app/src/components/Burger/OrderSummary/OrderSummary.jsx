import React from 'react'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingredientKey => (
            <li key={ingredientKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingredientKey}: </span>
                {props.ingredients[ingredientKey]}
            </li>
        ));

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with this ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p>Continue to Checkout?</p>
        </>
    );
}

export default orderSummary;