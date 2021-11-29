import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchPad from './src/container/LaunchPad';
import Dashboard from './src/container/Dashboard';
import AddTask from './src/container/AddTask';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Launchpad" component={LaunchPad} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="AddTask" component={AddTask} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
