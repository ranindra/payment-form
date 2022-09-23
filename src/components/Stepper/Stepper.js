import React from 'react';
import styled from 'styled-components';
import arrowRight from '../../assets/Images/keyboard_arrow_right.svg'
const StepperWrap = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    width: 100%;
    `;
const StepperBg = styled.div`
    max-width: 500px;
    background: #FFFAE6;
    border-radius: 35px;
    display: flex;
    justify-content: space-between;
    padding: 20px 38px;
    margin: auto;
    position: relative;
    `;
const StepperItem = styled.div`
    position: relative;
    display: flex;
    label {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FF8A00;
        margin-left: 60px;
        margin-right: 24px;
    }
    img {
        margin-right: 20px;
        position: relative;
    }
    span {
        width: 10px;
        border-radius: 30px;
        font-size: 16px;
        text-align: center;
        padding: 9px 14px;
        box-shadow: 0px 2px 4px rgba(255, 138, 0, 0.3);
        position: absolute;
        margin-top: -9px;        
        background: RGBA(255,138,0,0.2);
        color: #FF8A00;
        &#active {
            background: #FF8A00;
            color: #FFFFFF;
        }
    }
    `;

function Stepper(props) {

    return (
        <StepperWrap>
            <StepperBg>
                <StepperItem><span id={props.step >= 1 ? 'active' : ''}>1</span><label>Delivery</label><img src={arrowRight} alt="arrow" /></StepperItem>
                <StepperItem><span id={props.step >= 2 ? 'active' : ''}>2</span><label>Payment</label><img src={arrowRight} alt="arrow" /></StepperItem>
                <StepperItem><span id={props.step >= 3 ? 'active' : ''}>3</span><label>Finish</label></StepperItem>
            </StepperBg>
        </StepperWrap>
    )
}

export default Stepper;