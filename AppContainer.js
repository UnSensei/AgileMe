import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './App';
import LaunchPad from './src/container/LaunchPad';

const Stack = createNativeStackNavigator();

const PrimaryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{headerShown: false}}>
      <Stack.Screen name="LaunchPad" component={LaunchPad} />
    </Stack.Navigator>
  );
};

export default function AppContainer() {
  return (
    <NavigationContainer>
      <PrimaryStack />
      <App />
    </NavigationContainer>
  );
}
