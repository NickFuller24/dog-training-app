import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import CreateAccountScreen from './app/screens/CreateAccountScreen';
import SignInScreen from './app/screens/SignInScreen';
import ProfileScreen from './app/screens/Profile/ProfileScreen';
import DogProfileScreen from './app/screens/Profile/DogProfileScreen';

// Create navigation stack
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Sign In" component={SignInScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Create Account" component={CreateAccountScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Dog Profile" component={DogProfileScreen} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;