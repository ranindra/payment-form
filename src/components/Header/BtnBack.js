import React from 'react';
import { Link } from 'react-router-dom';
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
    a {
        text-decoration: none;
        color: #000000;
    }
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
        <BackBtn onClick={props.btnBackClick}>
            <Link to={props.backLink}>
                <img src={arrowBack} alt="arrow" />
                <label>{props.label}</label>
            </Link>
        </BackBtn>
    )
}

export default BtnBack;