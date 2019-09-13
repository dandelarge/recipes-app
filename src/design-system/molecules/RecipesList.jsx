import React from 'react';
import SummaryItem from './SummaryItem';

function RecipesList() {

    const array = [{
        id: 1,
        dishName: 'Cochinita pibil',
        rationsMin: 2,
        rationsMax: 4,
        isVeggie: false,
        image: 'receta-cochinita-pibil-facil.jpg',
        slug: 'coshinita-pibil'
    },
    {
        id: 2,
        dishName: 'Picadas Jarochas',
        rationsMin: 2,
        rationsMax: 4,
        isVeggie: true,
        image: 'picadas.jpg',
        slug: 'picadas'
    }

    ];
    const recipesList =  array.map( item => <SummaryItem key={item.id} {...item}/>);

    return (
        <ul className="recipes-list">
            {recipesList}
        </ul>
    );
}

export default RecipesList;