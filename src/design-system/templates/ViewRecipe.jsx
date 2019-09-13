import React from 'react';
import IngredientsList from '../molecules/IngredientsList';
import recipesService from '../../helpers/recipesService';

function ViewRecipe(props) {
    const {match} = props;
    const {dishName, ingredients, instructions, image} = recipesService().getRecipe(match.params.slug);

    return  (
        <section>
            <h2 className="recipes-title">{dishName}</h2>
            <img className="recipe-image" src={`/${image}`} alt=""/>
            <IngredientsList ingredients={ingredients}></IngredientsList>
            <h3>INSTRUCTIONS</h3>
            <p>{instructions}</p>
        </section>
    );
}

export default ViewRecipe;