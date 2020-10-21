import './polyfills';
import React, {PureComponent} from 'react';
import {AppRegistry, TextInputFocusEventData, Text} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

class Root extends PureComponent {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent(appName, () => Root);
