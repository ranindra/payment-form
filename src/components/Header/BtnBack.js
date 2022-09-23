import React from 'react';
import styled from 'styled-components';
import arrowBack from '../../assets/Images/arrow_back.svg';
const BackBtn = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    opacity: 0.6;
    margin-bottom: 24px;
    cursor: pointer;
    img {
        width: 13px;
        height: 13px;
        margin-right: 10px;
        margin-top: 2px;
    }
    label {
        padding-top: 5px;
        cursor: pointer;
    }
    `;

function BtnBack(props) {
    
    return (
        <BackBtn>
            <img src={arrowBack} alt="arrow" />
            <label>{props.label}</label>
        </BackBtn>
    )
}

export default BtnBack;