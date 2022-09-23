import React, { useState } from 'react';
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

function Step1() {
    const [drpCheck, setdrpCheck] = useState(false);

    return (
        <Wrapper>
            <LeftSect>
                <Top>
                    <BtnBack
                        label={'Back to cart'}
                    />
                    <Header
                        heading={"Delivery details"}
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
                />
            </Asside>
        </Wrapper>
    )
}

export default Step1;