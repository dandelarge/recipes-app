import React from 'react';
import IngredientsList from '../molecules/IngredientsList';

function ViewRecipe(props) {
    const ingredients = [
        {amount: 2, measure: 'cups', name: 'Axiote'},
        {amount: 0.5, measure: 'kilos', name: 'pulled pork meat'},
        {amount: 1, measure: 'cup', name: 'onion'},
    ];

    const {match} = props;

    return  (
        <section>
            <h2 className="recipes-title">Cochinita Pibil</h2>
            <img className="recipe-image" src="/receta-cochinita-pibil-facil.jpg" alt=""/>
            <IngredientsList ingredients={ingredients}></IngredientsList>
            <h3>INSTRUCTIONS</h3>
            {match.params.id}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
    );
}

export default ViewRecipe;