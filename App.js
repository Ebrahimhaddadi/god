import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import 'react-native-gesture-handler';
import Refactor from './src/Refactor';
import Device from './src/Device';



const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
 <Stack.Navigator  initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Refactor" component={Refactor}/>
      <Stack.Screen name="Device" component={Device}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
