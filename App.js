import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LaunchPad from './src/container/LaunchPad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaProvider>
        <LaunchPad name="Chakradhar" />
      </SafeAreaProvider>
    );
  }
}

export default App;
