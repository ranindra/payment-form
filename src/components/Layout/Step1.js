import React from 'react';
import Delivery from '../Forms/Delivery';
import styled from 'styled-components';
import BtnBack from '../Header/BtnBack';
import Header from '../Header/Header';
const Wrapper = styled.div`
    
    `;
const Top = styled.div`
    position: relative;
    display: grid;
    
    `;

const FormSection = styled.div`
    margin-top: 36px;
    `;


function Step1() {

    return (
        <Wrapper>
            <Top>
                <BtnBack
                    label={'Back to cart'}
                />
                <Header
                    heading={"Delivery details"}
                    check={true}
                    onCheck
                    dropshipperCheck
                />
            </Top>
            <FormSection>
                <Delivery />
            </FormSection>
        </Wrapper>
    )
}

export default Step1;