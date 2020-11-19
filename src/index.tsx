import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { Routes } from './routes';

export function App() {
  return <Routes />;
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
