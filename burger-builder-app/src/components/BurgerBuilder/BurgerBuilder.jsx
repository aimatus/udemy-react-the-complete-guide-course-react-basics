import React from 'react';
import Burger from '../Burger/Burger'

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
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