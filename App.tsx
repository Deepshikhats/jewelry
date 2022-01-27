import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import RootNavigation from './src/routes/rootNavigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <RootNavigation />

      
    </>
  );
};


export default App;
