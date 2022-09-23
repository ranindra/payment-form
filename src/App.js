
import React from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import Stepper from './components/Stepper/Stepper';
import Step1 from './components/Layout/Step1';

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
  return (
    <div className="App">
      <GlobalStyle />
      <Stepper
        step={1}
      />
      <Section>
        <Step1/>

      </Section>
    </div>
  );
}

export default App;
