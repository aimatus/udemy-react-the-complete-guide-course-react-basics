import React from 'react';
import Burger from '../Burger/Burger'
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal'
import OrderSumary from '../Burger/OrderSummary/OrderSummary'

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
        totalPrice: 4.00,
        purchasable: false,
        orderSummaryModalIsVisible: false
    }

    updatePurchaseState = (newIngredients) => {
        const ingredientsArray = Object.keys(newIngredients)
            .map(ingredientKey => {
                return newIngredients[ingredientKey];
            })
            .reduce((ingredientsAmount, element) => {
                return ingredientsAmount + element
            }, 0);
        this.setState({ purchasable: ingredientsArray > 0 });
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
        this.updatePurchaseState(newIngredients);
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
        this.updatePurchaseState(newIngredients);
    }

    orderSummaryModalHandler = () => {
        this.setState({ orderSummaryModalIsVisible: true });
    }

    orderSummaryCancelHandler = () => {
        this.setState({ orderSummaryModalIsVisible: false });
    }

    orderSummaryContinueHandler = () => {
        alert('Continue');
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
                <Modal
                    show={this.state.orderSummaryModalIsVisible}
                    modalClosed={this.orderSummaryCancelHandler}>
                    <OrderSumary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.orderSummaryCancelHandler}
                        purchaseContinued={this.orderSummaryContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    orderSummaryModalHandler={this.orderSummaryModalHandler} />
            </>
        );
    }
}

export default BurgerBuilder;