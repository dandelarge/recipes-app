import React from 'react';

function TextInput(props) {
    const {inputId, inputType, placeholder} = props;

    return(
        <label htmlFor={inputId}>
            {props.children}
            <input id={inputId} name={inputId} type={inputType} placeholder={placeholder}/>
        </label>
    );
}

export default TextInput;