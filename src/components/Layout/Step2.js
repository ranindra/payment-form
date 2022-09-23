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

function Step2(props) {
    const [drpCheck, setdrpCheck] = useState(false);
    const [totalPay, setTotal] = useState(500000);
    const [feeDropship, setFee] = useState(0);
    
    return (
        <Wrapper>
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
                    <Payment/>
                </FormSection>
            </LeftSect>
            <Asside>
                <Summary 
                    fee={drpCheck}
                    btnLabel={"Continue to Payment"}
                    shipment={false}
                    total={(new Intl.NumberFormat().format(totalPay+feeDropship))}
                />
            </Asside>
        </Wrapper>
    )
}

export default Step2;