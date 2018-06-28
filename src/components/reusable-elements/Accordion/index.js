import React, { Component } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: red;
`;

export default class Accordion extends Component {
  state = {
    open: false
  }
  
  handleClick = () => {
    if (this.state.open) {
      return this.setState({ open: false });
    }

    return this.setState({ open: true });
  }

  render() {
    return (
      <AccordionWrapper>
        {this.props.title}
      </AccordionWrapper>
    );
  }
}
