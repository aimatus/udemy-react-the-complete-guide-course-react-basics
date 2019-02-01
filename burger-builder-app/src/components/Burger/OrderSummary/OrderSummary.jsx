import React from 'react'
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    render() {

        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(ingredientKey => (
            <li key={ingredientKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingredientKey}: </span>
                {this.props.ingredients[ingredientKey]}
            </li>
        ));

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with this ingredients:</p>
                <ul>{ingredientsSummary}</ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    buttonType='Danger'
                    clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button
                    buttonType='Success'
                    clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </>
        );
    }
}

export default OrderSummary;