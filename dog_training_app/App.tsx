import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import SignInScreen from './app/screens/SignInScreen';

// Create navigation stack
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Sign In" component={SignInScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// If you want more details than email and password, you need a separate config
export default App;