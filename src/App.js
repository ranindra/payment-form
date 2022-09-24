
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import Stepper from './components/Stepper/Stepper';
import Step1 from './components/Layout/Step1';
import Step2 from './components/Layout/Step2';

const GlobalStyle = createGlobalStyle`
.App {
  width: 100%;
  min-height: 100vh;
  background-color: #FFFAE6;
  padding-top: 20px;
}
`;

const Section = styled.div`
    max-width: 1100px;
    min-height: 550px;
    position: relative;
    margin: 30px auto;
    background: #FFFFFF;
    box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
    border-radius: 4px;
    padding: 30px 40px
`;

function App() {
  const [stepNumber, setstepNumber] = useState(1);
  const [feeDrp, setFeeDrp] = useState()

  const onSetDropCheck = (formState) => {
    // console.log(formState);
    setFeeDrp(formState);
    setstepNumber(2)
  }

  const onSetStep = (formState) => {
    // console.log(formState);
    // setFeeDrp(formState);
    setstepNumber(formState)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Stepper
        step={stepNumber}
      />

      <BrowserRouter>
        <Section>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Step1
                  linkClick="/payment"
                  btnClick={onSetDropCheck}
                />
              }
            />
            <Route
              exact
              path="/payment"
              element=
              {<Step2
                btnBackClick={() => setstepNumber(1)}
                feeDropship={feeDrp}
                btnClick={onSetStep}
                finishStep={stepNumber === 3 ? true : false}
              />}
            />
          </Routes>
        </Section>
      </BrowserRouter>
    </div>
  );
}

export default App;
