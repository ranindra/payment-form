import React, { useState } from 'react';
import styled from 'styled-components';
import Payment from '../Forms/Payment';
import BtnBack from '../Header/BtnBack';
import Header from '../Header/Header';
import Summary from '../Summary/Summary';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    `;
const Top = styled.div`
    position: relative;
    display: grid;   
    `;

const FormSection = styled.div`
    margin-top: 66px;
    position: relative;
    `;

const Asside = styled.div`
    width: 300px;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
    } 
    `;

const LeftSect = styled.div`
    width: 100%;
    max-width: 791px;
    `;
const LeftSectEnd = styled.div`
    width: 50%;
    max-width: 791px;
    margin: auto;
    `;

const DetailOrder = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
    position: relative;
    margin: 70px 0 20px;
    span {
        display: block;
        font-family: "InterBold"
    }
`;

function Step2(props) {
    // const [drpCheck, setdrpCheck] = useState(false);
    const [totalPay, setTotal] = useState(500000);
    const [feeDropship, setFee] = useState(5900);
    const [selectedShipment, setSelectedShipment] = useState(1);
    const [selectedPayment, setSelectedPayment] = useState(1);
    const [shipPayment, setShipPayment] = useState(15000);

    function onShipment(formState) {
        setSelectedShipment(formState);
        setShipPayment(formState === 1 ? 15000 : formState === 2 ? 9000 : 29000)
    }

    function onPayment(formState) {
        setSelectedPayment(formState);
    }

    return (
        <Wrapper>
            {
                props.finishStep ?
                    <LeftSectEnd>
                        <Header
                            heading={"Thank You"}
                            check={false}
                            dropshippercheck={false}
                        />
                        <DetailOrder>
                            <span>Order Id: </span>
                            <label>Your order will be delivered with {selectedShipment === 1 ? "GO-SEND" : selectedShipment === 2 ? "JNE" : "Personal Courier"}</label>
                        </DetailOrder>
                        <BtnBack
                            label={'Go to homepage'}
                            btnBackClick={props.btnBackClick}
                            backLink={"/"}

                        />
                    </LeftSectEnd>
                    :
                    <LeftSect>
                        <Top>
                            <BtnBack
                                label={'Back to delivery'}
                                btnBackClick={props.btnBackClick}
                                backLink={"/"}

                            />
                            <Header
                                heading={"Shipment"}
                                check={false}
                                dropshippercheck={false}
                            />
                        </Top>
                        <FormSection>
                            <Payment
                                onSelect={onShipment}
                                onSelectPay={onPayment}
                            />
                        </FormSection>
                    </LeftSect>
            }
            <Asside>
                <Summary
                    fee={props.feeDropship}
                    btnLabel={selectedPayment === 1 ? "Pay with e-Wallet" : selectedPayment === 2 ? "Pay with Bank Transfer" : "Pay with Virtual Account"}
                    shipment
                    shipEstimate={selectedShipment}
                    total={(new Intl.NumberFormat().format(totalPay + shipPayment + (props.feeDropship ? feeDropship : 0)))}
                    btnClick={() => props.btnClick(3)}
                    finishStep={props.finishStep}
                    paymentMethod={selectedPayment === 1 ? "e-Wallet" : selectedPayment === 2 ? "Bank Transfer" : "Virtual Account"}
                    shipmentType={selectedShipment === 1 ? "GO-SEND" : selectedShipment === 2 ? "JNE" : "Personal Courier"}
                    shipmentTotal={selectedShipment === 1 ? "15,000" : selectedShipment === 2 ? "9,000" : "29,000"}
                />
            </Asside>
        </Wrapper>
    )
}

export default Step2;