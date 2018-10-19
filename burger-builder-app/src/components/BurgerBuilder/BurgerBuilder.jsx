import React from 'react';
import Burger from '../Burger/Burger'

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;