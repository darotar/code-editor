import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getFiles, getFileContent } from '../../../../store/actions';
import Loader from 'react-loader';

const mapStateToProps = ({ files }) => ({ files });
const mapDispatchToProps = dispatch => (
  {
    getFiles: () => dispatch(getFiles()),
    getFileContent: (file) => dispatch(getFileContent(file))
  }
);

const FilesListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: relative;
  min-height: 150px;
`;

const FileListItem = styled.li`
  padding: 7px 10px;
  cursor: pointer;
  transition: background-color 175ms ease-out;

  &:hover {
    background-color: #3f3f48;
  }
`;

class FilesList extends Component {
 componentDidMount() {
   const { files } = this.props;

   return !files.length && this.props.getFiles();
 }

 getContent = (file) => {
   return () => {
    return this.props.getFileContent(file);
   }
 }

 render() {
   const { files } = this.props;

   return (
    <FilesListWrapper>
      <Loader loaded={!!files.length} width={1} color="white" length={8} radius={8}>
        {files.length && files.map(item => (
          <FileListItem key={item.id} onClick={this.getContent(item.file)}>
            {item.isDir && '+ '}
            {item.file}
          </FileListItem> 
        ))}
      </Loader>
    </FilesListWrapper>
   );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesList);
