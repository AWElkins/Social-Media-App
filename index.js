import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Feed from './src/components/Feed';

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar hidden={true} />
    <Header name={'Social Media App'} />
    <Feed />
  </View>
);

AppRegistry.registerComponent('social', () => App);
