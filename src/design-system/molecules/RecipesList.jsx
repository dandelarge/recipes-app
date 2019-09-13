import React from 'react';
import SummaryItem from './SummaryItem';
import recipesService from '../../helpers/recipesService';

function RecipesList() {
    const array = recipesService().getMany()
    const recipesList = array.map( item => <SummaryItem key={item.id} {...item}/>);

    return (
        <ul className="recipes-list">
            {recipesList}
        </ul>
    );
}

export default RecipesList;