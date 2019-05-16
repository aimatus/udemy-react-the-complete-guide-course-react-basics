import React from 'react';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSumary from '../Burger/OrderSummary/OrderSummary';
import Spinner from '../UI/Spinner/Spinner';
import withErrorHandler from '../WithErrorHandler/withErrorHandler';
import axios from '../../axios-order';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 4.0,
    purchasable: false,
    orderSummaryModalIsVisible: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get('https://burger-builder-react-9525e.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState = newIngredients => {
    const ingredientsArray = Object.keys(newIngredients)
      .map(ingredientKey => {
        return newIngredients[ingredientKey];
      })
      .reduce((ingredientsAmount, element) => {
        return ingredientsAmount + element;
      }, 0);
    this.setState({ purchasable: ingredientsArray > 0 });
  };

  addIngredientHandler = ingredientType => {
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
  };

  removeIngredientHandler = ingredientType => {
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
  };

  orderSummaryModalHandler = () => {
    this.setState({ orderSummaryModalIsVisible: true });
  };

  orderSummaryCancelHandler = () => {
    this.setState({ orderSummaryModalIsVisible: false });
  };

  orderSummaryContinueHandler = () => {
    // alert('Continue');
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Abe',
        address: {
          street: 'Street 123',
          zipCode: '174572',
          country: 'Ecuador'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, orderSummaryModalIsVisible: false });
      })
      .catch(error => {
        this.setState({ loading: false, orderSummaryModalIsVisible: false });
        console.log(error);
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Could not load ingredients</p> : null;

    if (this.state.ingredients) {
      orderSummary = (
        <OrderSumary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancelled={this.orderSummaryCancelHandler}
          purchaseContinued={this.orderSummaryContinueHandler}
        />
      );
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />,
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            orderSummaryModalHandler={this.orderSummaryModalHandler}
          />
        </>
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          show={this.state.orderSummaryModalIsVisible}
          modalClosed={this.orderSummaryCancelHandler}
        >
          {orderSummary}
        </Modal>
        {this.state.error ? 'Ingredients cannot be loaded' : null}
        {this.state.ingredients ? burger : <Spinner />}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
