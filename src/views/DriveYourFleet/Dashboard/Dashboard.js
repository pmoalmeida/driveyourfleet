import React, { Component } from 'react';
import {
  Card,
  CardBody
} from 'reactstrap';
import styled from 'styled-components';

import logo from '../../../assets/img/brand/logo_alt.svg';


const logoStyle = {
  width: '250px',
  height: '250px',
  padding: '10px'
}

const LogoContainer = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: monospace;
  font-weight: bold;
  font-size: 18px;
  font-style: italic;
  font-variant: all-small-caps;
`;

class Dashboard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
              <TextContainer>Bem vindo ao sistema de gestão da Drive Your Fleet!</TextContainer>
              <LogoContainer><img src={logo} style={logoStyle} className="App-logo" alt="logo" /></LogoContainer>
        </CardBody>
      </Card>
    );
  }
}

export default Dashboard;
