import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

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
    margin-bottom: 60px;
    cursor: pointer;
    align-items: center;
    &#selected, :hover {
        background: rgba(27, 217, 123, 0.1);
        border: 2px solid #1BD97B;
    }
    label {
        span {
            font-size: 13px;
            line-height: 16px;
            color: #000000;
            mix-blend-mode: normal;
            opacity: 0.6;
            display: block;
            margin-bottom: 3px;
            pointer-events:none;
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

const TitleCont = styled.div`
margin-bottom: 65px;
`;

function Payment(props) {
    const [selectedShipment, setSelectedShipment] = useState(1);
    const [selectedPayment, setSelectedPayment] = useState(1);

    return (
        <>
            <ShipmentCont>
                <ShipmentItem
                    onClick={() => {
                        setSelectedShipment(1)
                        props.onSelect(1)
                    }}
                    id={selectedShipment === 1 ? "selected" : ""}>
                    <label><span>GO-SEND</span>15,000</label>
                </ShipmentItem>
                <ShipmentItem
                    onClick={() => {
                        setSelectedShipment(2)
                        props.onSelect(2)
                    }}
                    id={selectedShipment === 2 ? "selected" : ""}>
                    <label><span>JNE</span>9,000</label>
                </ShipmentItem>
                <ShipmentItem
                    onClick={() => {
                        setSelectedShipment(3)
                        props.onSelect(3)
                    }}
                    id={selectedShipment === 3 ? "selected" : ""}>
                    <label><span>Personal Courier</span>29,000</label>
                </ShipmentItem>
            </ShipmentCont>
            <TitleCont>
                <Header
                    heading={"Payment"}
                    check={false}
                    dropshippercheck={false}
                />
            </TitleCont>
            <ShipmentCont>
                <ShipmentItem
                    onClick={() => {
                        setSelectedPayment(1)
                        props.onSelectPay(1)
                    }}
                    id={selectedPayment === 1 ? "selected" : ""}>
                    <label><span>e-Wallet</span>15,000 Left</label>
                </ShipmentItem>
                <ShipmentItem
                    onClick={() => {
                        setSelectedPayment(2)
                        props.onSelectPay(2)
                    }}
                    id={selectedPayment === 2 ? "selected" : ""}>
                    <label>Bank Transfer</label>
                </ShipmentItem>
                <ShipmentItem
                    onClick={() => {
                        setSelectedPayment(3)
                        props.onSelectPay(3)
                    }}
                    id={selectedPayment === 3 ? "selected" : ""}>
                    <label>Virtual Account</label>
                </ShipmentItem>
            </ShipmentCont>
        </>

    )
}

export default Payment;
