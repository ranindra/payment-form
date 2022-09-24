import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Swrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px 0 20px 20px;
border-left: 1px solid RGBA(255,138,0,0.2);
height: 100%;
margin-left: 20px;
margin-top:20px;
@media (max-width: 768px) {
    border-left: 0px;
    margin-left: 0px;
    padding-left: 0px;
} 
#headers {
    font-family: 'MontserratBold';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FF8A00;
    padding-top: 20px;
}
#items {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    opacity: 0.6;
    margin: 8px 0;
}
#estimations {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-top: 5px;
}
#ship {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1BD97B;
    margin: 3px 0;
}
#costLabel {
    display: flex;
    justify-content: space-between;
    color: RGBA(0,0,0,0.6);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 10px 0px;
    b {
        font-family: 'InterBold';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
}
#totalCost {
    font-family: 'MontserratBold';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FF8A00;
    margin-top: 24px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}
#borderBr {
    border-bottom: 1px solid #D8D8D8;
    width: 80px;
    margin: 12px 0px;
}
#totalBtn {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;    
    color: #FFFFFF;
    padding: 20px;
    background: #FF8A00;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
    border-radius: 2px;
    width: 100%;
    cursor: pointer;
}
#total-payment {
    margin-top: auto;
}
`;
function Summary(props) {
    return (
        <Swrapper>
            <label id='headers'>Summary</label>
            <label id='items'>10 items purchased</label>
            <label id='borderBr'></label>

            {props.shipment ? <>
                <label id='estimations'>Delivery estimation</label>
                <label id='ship'>{props.shipEstimate === 1 ? "today by GO-SEND" : props.shipEstimate === 2 ? "2 days by JNE" : "1 Day"}</label>
            </> : null}

            {props.finishStep ?
                <>
                    <label id='borderBr'></label>
                    <label id='estimations'>Payment Method</label>
                    <label id='ship'>{props.paymentMethod}</label>
                </>
                :
                <></>}


            <section id='total-payment'>
                <label id='costLabel'>Cost of goods <b>500,000</b></label>
                {props.fee ? <label id='costLabel'>Dropshipping Fee <b>5,900</b></label> : null}
                {props.shipment ? <label id='costLabel'>{props.shipmentType} shipment <b>{props.shipmentTotal}</b></label> : null}
                <label id='totalCost'>Total <b>{props.total}</b></label>
                {props.finishStep ? <></> :
                    <Link to={props.linkClick}><button id='totalBtn' onClick={props.btnClick}>{props.btnLabel}</button></Link>
                }
            </section>
        </Swrapper>
    )
}

export default Summary;