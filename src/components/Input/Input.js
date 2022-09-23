import React from 'react';
import styled from 'styled-components';

const InputField = styled.div`
margin-bottom: 10px;
input{
    font-size: 16px;
    width: 100%;
    padding: 21px 15px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    outline: none;
    font-family: 'InterBold';
    margin: 0 !important;
    &:focus {
        border: solid 1px #1BD97B;
        background-color: rgba(248, 250, 252, 0.21);
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
    font-size: 12px;
    transform: translate(1rem, -3.6rem);
    }
}
label {
    color: #8d8d8d;
    transform: translate(1rem, -2.5rem);
    transition: all 0.2s ease-out;
    margin-bottom: 0;
    font-weight: 500;
    position: absolute;
    pointer-events:none;
}
&.error {
    input{
        &:focus {
            border: solid 1px #FF8A00;
            background-color: rgba(248, 250, 252, 0.21);
        }
    }
}

`;

function InputForm(props) {
    return (
        <InputField className={props.error ? 'error' : ''}>
            <input
                type={props.typeInput}
                id={props.id}
                placeholder=" "
            />
            <label>{props.placeHolder}</label>
        </InputField>
    )
}

export default InputForm;