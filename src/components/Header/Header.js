import React from 'react';
import styled from 'styled-components';
import check from '../../assets/Images/check.svg'

const HeaderWrap = styled.div`
        display: relative;   
        width: 100%;
    `;

const Heading = styled.div`
    position: relative;
    span {
        position: absolute;
        background: #EEEEEE;
        width: 300px;
        height: 8px;
        top: 0px;
        margin-top: 32px;
    }
    h5 {
        position: absolute;
        font-family: 'MontserratBold';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: #FF8A00;
        margin: 0px;
    } 
    `;

const DropshipperCheck = styled.div`        
    float: right;
    margin-top: 20px;
    position: relative;
    cursor: pointer;
    .imgWrapper {
        border: 2px solid #1BD97B;
        width: 11px;
        height: 11px;
        padding: 2px;
        position: absolute;
        img {
            padding-bottom: 3px;
            left: 1px;
            position: absolute;
        }
    }
    
    label {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #2D2A40;
        padding-left: 25px;
    }
    `;
function Header(props) {

    return (
        <HeaderWrap>
            <Heading>
                <span></span><h5>{props.heading}</h5>
            </Heading>
            {props.dropshipperCheck ? 
            <DropshipperCheck><div onClick={props.onCheck} className="imgWrapper">{props.check ? <img src={check} alt="check" /> : null}</div><label>Send as dropshipper</label></DropshipperCheck>
            : null}
        </HeaderWrap>
    )
}

export default Header;