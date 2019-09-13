import React from 'react';
import TextInput from '../atoms/TextInput';
import InputGroup from '../molecules/InputGroup';
import IngredientsInputs from '../molecules/IngredientsInputs';
import recipesService from '../../helpers/recipesService';

function EditRecipe(props) {
    const {match} = props;

    console.log(match.params);

    const recipe = recipesService().getRecipe(match.params.slug);
    const {dishName, image, isVeggie,
        rationsMin, rationsMax, ingredients,
        instructions} = recipe;

    const rationInputs = [
        {label: 'from', name: 'rationsMin', type: 'number'},
        {label: 'to', name: 'rationsMax', type: 'number'}
    ]

    return (
        <section>
            <h2 className="recipes-title">What are we cooking?</h2>
            <form className="recipe-form">
                <TextInput value={dishName} inputId="dishName" inputType="text" placeholder="Hamburger">
                    What's the name of the dish?
                </TextInput>
                <TextInput value={image} inputId="image" inputType="file">
                    Upload an image of the dish!
                </TextInput>
                <InputGroup list={rationInputs} values={{min: rationsMin, max: rationsMax}}>
                    How Many People can eat from this dish?
                </InputGroup>
                <TextInput inputId="isVeggie" inputType="checkbox" value={isVeggie}>
                    Is this dish Vegetarian?
                </TextInput>
                <h4 className="recipes-title">Now list the ingredients!</h4>
                <IngredientsInputs></IngredientsInputs>
                <label htmlFor="instructions">
                    <p>How do you cook it?</p>
                    <textarea name="instructions" id="instructions" cols="30" rows="10"></textarea>
                </label>

                <button type="submit" className="cta-button cta-button--wide">SAVE</button>
            </form>
        </section>
    );
}

export default EditRecipe;