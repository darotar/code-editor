import React, { Component } from 'react';
import { Grid } from 'styled-css-grid';
import { FrameSidebar, FilesSidebar, CodeSection } from './components';
import store from './store';

window.store = store;

class App extends Component {
  state = {
    frameVisible: true,
    columns: '5% 16% 79%'
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code === 'KeyB') {
        if (this.state.frameVisible) {
          return this.setState({ frameVisible: false, columns: '5% 95%' });
        }

        return this.setState({ frameVisible: true, columns: '5% 16% 79%' });
      }
    })
  }

  render() {
    const { frameVisible, columns } = this.state;
    return (
      <div className="App">
        <Grid gap="0" columns={columns} rows="5vh 79vh 16vh">
          <FrameSidebar />
          { frameVisible && <FilesSidebar /> }
          <CodeSection />
        </Grid>
      </div>
    );
  }
}

export default App;
