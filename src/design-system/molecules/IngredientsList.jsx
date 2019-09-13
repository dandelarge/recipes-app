import React from 'react';

function IngredientsList(props) {

    const {ingredients} = props;

    const listItems = ingredients.map(({amount, measure, name}) => (
        <li className="ingredient" key={name}>
            {amount} {measure} of {name}
        </li>)
    );

    return(
        <ul className="ingredients-list">
            {listItems}
        </ul>
    );
}

export default IngredientsList;