import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { dirname } from '../../../../store/actions';

const FilesSidebarDirname = styled.div`
  text-transform: uppercase;
  width: 100%;
  background-color: #373737;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const mapStateToProps = ({ dirname }) => ({ dirname });
const mapDispatchToProps = dispatch => ({ getDirname: () => dispatch(dirname()) });

class Dirname extends Component {
  componentDidMount() {
    const { getDirname } = this.props;
    console.log(this.props);

    return !this.props.dirname && getDirname();
  }

  render() {
    return (
      <FilesSidebarDirname>
        {this.props.dirname || null}
      </FilesSidebarDirname>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dirname);