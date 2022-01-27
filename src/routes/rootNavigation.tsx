import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../pages/splashScreens/screen1';
import Screen2 from '../pages/splashScreens/screen2';
import Login from '../pages/Auth/login/login';

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false }}>
          <RootStack.Screen name="Screen1" component={Screen1} />
          <RootStack.Screen name="Screen2" component={Screen2} />
          <RootStack.Screen name="Login" component={Login} />
        </RootStack.Navigator>
      </NavigationContainer>
  );
};

export default RootNavigation;
