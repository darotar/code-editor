import React, { Component } from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import './style.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import { connect } from 'react-redux';
import theme from '../../utils/theme';
import files from '../../api/files';

const CodeSectionWrapper = styled.div`
  background-image: url('http://dodskypict.com/D/Hipster-Cat-Wallpaper-On-Wallpaper-Hd-6.jpg');
  background-size: cover;
  background-color: ${theme.color.codeSection};
  color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

const mapStateToProps = ({ content, file }) => ({ content, file });

class CodeSection extends Component {
  constructor(props) {
    super(props);

    this.content = props.content;
  }
  onKeyDown = (editor, event) => {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyS') {
      return files.saveFileContent(this.props.file, this.content);
    }
  }

  render() {
    return (
      <Cell height={3}>
        <CodeSectionWrapper>
          <CodeMirror
            value={this.props.content}
            options={{
              mode: 'javascript',
              theme: 'railscasts',
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {
              this.content = value;
            }}
            onKeyDown={this.onKeyDown}
          />
        </CodeSectionWrapper>
      </Cell>
    );
  }
}

export default connect(mapStateToProps)(CodeSection);
