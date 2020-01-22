import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#7d40e7' barStyle="light-content"/>
      <Routes />
    </>
  );
}
