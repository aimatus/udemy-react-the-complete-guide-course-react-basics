import React from 'react';
import Burger from '../Burger/Burger'
import BuildControls from '../Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.00
    }

    addIngredientHandler = (ingredientType) => {
        const currentIngredientAmount = this.state.ingredients[ingredientType];
        const newIngredientAmount = currentIngredientAmount + 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[ingredientType] = newIngredientAmount;
        const priceIncrement = INGREDIENT_PRICES[ingredientType];
        const currentPrice = this.state.totalPrice;
        this.setState({
            totalPrice: currentPrice + priceIncrement,
            ingredients: newIngredients
        });
    }

    removeIngredientHandler = (ingredientType) => {
        const currentIngredientAmount = this.state.ingredients[ingredientType];
        if (currentIngredientAmount <= 0) {
            return;
        }
        const newIngredientAmount = currentIngredientAmount - 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[ingredientType] = newIngredientAmount;
        const priceReduction = INGREDIENT_PRICES[ingredientType];
        const currentPrice = this.state.totalPrice;
        this.setState({
            totalPrice: currentPrice - priceReduction,
            ingredients: newIngredients
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} />
            </>
        );
    }
}

export default BurgerBuilder;