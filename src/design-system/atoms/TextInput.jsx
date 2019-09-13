import React from 'react';

function TextInput(props) {
    const {inputId, inputType, placeholder, value} = props;

    return(
        <label htmlFor={inputId}>
            {props.children}
            <input id={inputId}
                value={inputType === 'file' ? '' : value}
                name={inputId} type={inputType}
                placeholder={placeholder}
                checked={inputType === 'checkbox' ? value: value}/>
        </label>
    );
}

export default TextInput;