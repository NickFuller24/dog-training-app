import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import CreateAccountScreen from './app/screens/CreateAccountScreen';
import SignInScreen from './app/screens/SignInScreen';
import SearchNewServiceScreen from './app/screens/SearchNewServiceScreen';
import HomeScreen from './app/screens/HomeScreen';


// Create navigation stack
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Sign In" component={SignInScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Create Account" component={CreateAccountScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Search New Service" component={SearchNewServiceScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;