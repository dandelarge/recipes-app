import React from 'react';
import IngredientsInputs from './IngredientsInputs';

function InputGroup(props) {
    const {list} = props;

    const inputs = list.map(
        input => (
            <span key={input.name}>
                {input.label}
                <input
                    className={`form-input form-input--${input.className || 'tiny'}`}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                />
            </span>
        )
    );

    return (
        <label>
            { props.children }
            {inputs}
        </label>
    );
}

export default InputGroup;