import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IntroScreen from '../screens/Intro';
import LoginScreen from '../screens/Login';
import SearchScreen from '../screens/Search';
import FiltersScreen from '../screens/Filters';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const screenOptions = {
    gestureEnabled: false,
    headerShadowVisible: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
