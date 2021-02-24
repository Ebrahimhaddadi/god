import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import 'react-native-gesture-handler';
import Refactor from './src/Refactor';
import Device from './src/Device';
import Setting from './src/Setting';
import RNRestart from 'react-native-restart';
import Equipment from './src/Equipment';
import Calibration from "./src/Calibration";



const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
  
  })
  return (
    <NavigationContainer>
 <Stack.Navigator  initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Refactor" component={Refactor}/>
      <Stack.Screen name="Device" component={Device}/>
      <Stack.Screen name="Setting" component={Setting}/>
      <Stack.Screen name="Equipment" component={Equipment}/>
      <Stack.Screen name="Calibration" component={Calibration}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
