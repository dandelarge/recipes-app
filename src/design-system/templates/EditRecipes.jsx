import React from 'react';
import TextInput from '../atoms/TextInput';
import InputGroup from '../molecules/InputGroup';
import IngredientsInputs from '../molecules/IngredientsInputs';

function EditRecipe(props) {
    const rationInputs = [
        {label: 'from', name: 'rationsMin', type: 'number'},
        {label: 'to', name: 'rationsMax', type: 'number'}
    ]

    return (
        <section>
            <h2 className="recipes-title">What are we cooking?</h2>
            <form className="recipe-form">
                <TextInput inputId="dishName" inputType="text" placeholder="Hamburger">
                    What's the name of the dish?
                </TextInput>
                <TextInput inputId="image" inputType="file">
                    Upload an image of the dish!
                </TextInput>
                <InputGroup list={rationInputs}>
                    How Many People can eat from this dish?
                </InputGroup>
                <TextInput inputId="isVeggie" inputType="checkbox">
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