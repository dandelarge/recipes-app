const recipesService = () => {
    const array = [{
        id: 1,
        dishName: 'Cochinita pibil',
        rationsMin: 2,
        rationsMax: 4,
        isVeggie: false,
        image: 'receta-cochinita-pibil-facil.jpg',
        slug: 'coshinita-pibil',
        ingredients: [
            {amount: 2, measure: 'cups', name: 'Axiote'},
            {amount: 0.5, measure: 'kilos', name: 'pulled pork meat'},
            {amount: 1, measure: 'cup', name: 'onion'},
        ],
        instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        dishName: 'Picadas Jarochas',
        rationsMin: 2,
        rationsMax: 4,
        isVeggie: true,
        image: 'picadas.jpg',
        slug: 'picadas',
        ingredients: [
            {amount: 2, measure: 'cups', name: 'Axiote'},
            {amount: 0.5, measure: 'kilos', name: 'pulled pork meat'},
            {amount: 1, measure: 'cup', name: 'onion'},
        ],
        instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        dishName: 'Pescado Sarandeado',
        rationsMin: 2,
        rationsMax: 4,
        isVeggie: true,
        image: 'receta-cochinita-pibil-facil.jpg',
        slug: 'pescado',
        ingredients: [
            {amount: 2, measure: 'cups', name: 'Axiote'},
            {amount: 0.5, measure: 'kilos', name: 'pulled pork meat'},
            {amount: 1, measure: 'cup', name: 'onion'},
        ],
        instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 4,
        dishName: 'frijolitos',
        rationsMin: 2,
        rationsMax: 4,
        isVeggie: true,
        image: 'picadas.jpg',
        slug: 'frijolitos',
        ingredients: [
            {amount: 2, measure: 'cups', name: 'Axiote'},
            {amount: 0.5, measure: 'kilos', name: 'pulled pork meat'},
            {amount: 1, measure: 'cup', name: 'onion'},
        ],
        instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }];

    const getMany = () => {
        return array;
    }

    const getRecipe = (slug) => {
        return array.filter( (recipe) => {
            return recipe.slug === slug;
        })[0];
    }

    return {
        getMany,
        getRecipe
    }
};

export default recipesService;