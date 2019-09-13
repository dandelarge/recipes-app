import React, {useState} from 'react';
import InputGroup from './InputGroup';

function IngredientsInputs(props) {
    const [ingredientsList, setIngredientsList] = useState([true]);

    const ingredientsForm = [
        {type: 'number', placeholder: '2'},
        {type: 'text', placeholder: 'cups'},
        {type: 'text', label: 'of', placeholder: 'diced carrots', className: 'small'}
    ]

    const ingredientsComponentList = ingredientsList.map(
        (item, index) => (
            <li className="ingredient-input" key={index}>
                <p>how much of what?</p>
                <InputGroup list={ingredientsForm} ></InputGroup>
            </li>
        )
    );

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