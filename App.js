import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './src/routes';

export default function app() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
