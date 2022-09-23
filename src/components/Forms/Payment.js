import React, { useState } from 'react';
import styled from 'styled-components';

const ShipmentCont = styled.div`
margin-top: 30px;
display: flex;
`;

const ShipmentItem = styled.div`
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    font-family: 'Inter';
    font-style: normal;
    width: 180px;
    margin-right: 10px;
    label {
        span {
            font-size: 13px;
            line-height: 16px;
            color: #000000;
            mix-blend-mode: normal;
            opacity: 0.6;
            display: block;
        }
        font-family: 'InterBold';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #2D2A40;
        opacity: 0.6;
    }
`;

function Payment() {
    return (
        <ShipmentCont>
            <ShipmentItem>
                <label><span>GO-SEND</span>15,000</label>
            </ShipmentItem>
            <ShipmentItem>
                <label><span>JNE</span>9,000</label>
            </ShipmentItem>
            <ShipmentItem>
                <label><span>Personal Courier</span>29,000</label>
            </ShipmentItem>
        </ShipmentCont>

    )
}

export default Payment;
