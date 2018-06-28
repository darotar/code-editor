import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';
import theme from '../../utils/theme';
import Dirname from './components/Dirname';
import FilesList from './components/FilesList';

const FilesSidebarWrapper = styled.div`
  background-color: ${theme.color.filesSidebar};
  color: white;
  width: 100%;
  height: 100vh;
`;

export default class FilesSidebar extends PureComponent {
  render() {
    return (
      <Cell height={3} width={1}>
        <FilesSidebarWrapper>
          <Dirname />
          <FilesList />
        </FilesSidebarWrapper>
      </Cell>
    );
  }
}
