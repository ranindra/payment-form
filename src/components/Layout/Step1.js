import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Delivery from '../Forms/Delivery';
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
    margin-top: 36px;
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

function Step1(props) {
    const [drpCheck, setdrpCheck] = useState(false);
    const [totalPay, setTotal] = useState(500000);
    const [feeDropship, setFee] = useState(0);

    useEffect(() => drpCheck ? setFee(5900) : setFee(0), [drpCheck]);
    
    return (
        <Wrapper>
            <LeftSect>
                <Top>
                    <BtnBack
                        label={'Back to cart'}
                        btnBackClick={props.btnBackClick}
                    />
                    <Header
                        heading={"Delivery details"}
                        dropshipperCheck={true}
                        check={drpCheck}
                        onCheck={() => setdrpCheck(!drpCheck)}
                        
                    />
                </Top>
                <FormSection>
                    <Delivery
                        disDropship={drpCheck}
                    />
                </FormSection>
            </LeftSect>
            <Asside>
                <Summary 
                    fee={drpCheck}
                    btnLabel={"Continue to Payment"}
                    shipment={false}
                    total={(new Intl.NumberFormat().format(totalPay+feeDropship))}
                    btnClick={()=>props.btnClick(drpCheck)}
                    linkClick={props.linkClick}
                />
            </Asside>
        </Wrapper>
    )
}

export default Step1;