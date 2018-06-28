import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';
import theme from '../../utils/theme';

const FrameSidebarWrapper = styled.div`
  background-color: ${theme.color.frameSidebar};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default class FrameSidebar extends PureComponent {
  render() {
    return (
      <Cell height={3}>
        <FrameSidebarWrapper>
          Frame
        </FrameSidebarWrapper>
      </Cell>
    );
  }
}
