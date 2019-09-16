import React, {useState} from 'react';
import InputGroup from './InputGroup';

function IngredientsInputs(props) {
    const {ingredients} = props

    console.log(ingredients);
    // state Hook to update the list the user will see
    const [ingredientsList, setIngredientsList] = useState(ingredients);

    const ingredientsForm = [
        {type: 'number', placeholder: '2' },
        {type: 'text', placeholder: 'cups'},
        {type: 'text', label: 'of', placeholder: 'diced carrots', className: 'small'}
    ]


    const ingredientsComponentList = ingredientsList.map((item, index) => {
        const inputs = [
            {...ingredientsForm[0], value: item.amount},
            {...ingredientsForm[1], value: item.measure},
            {...ingredientsForm[2], value: item.name}
        ];

        return (
            <li className="ingredient-input" key={index}>
                <p>how much of what?</p>
                <InputGroup list={inputs} ></InputGroup>
            </li>);
    });

    const addItem = (e) => {
        e.preventDefault();
        setIngredientsList(list => [...list, true])
    };
    return (
        <React.Fragment>
        <ul className="ingredients">
            { ingredientsComponentList }
        </ul>
        <button
            className="cta-button cta-button--wide margin-bottom"
            onClick={addItem}>
            + Add an Ingredient
        </button>
        </React.Fragment>
    );
}

export default IngredientsInputs;