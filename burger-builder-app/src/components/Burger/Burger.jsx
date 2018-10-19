import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {

    let ingredientsList = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])]
                .map((_, index) => {
                    return <BurgerIngredient
                        key={ingredientKey + index}
                        type={ingredientKey} />
                });
        })
        .reduce((previousElement, currentElement) => {
            return previousElement.concat(currentElement);
        }, []);

    if (ingredientsList.length === 0) {
        ingredientsList = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {ingredientsList}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
}

export default burger;