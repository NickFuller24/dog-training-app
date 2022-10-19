import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';
// @ts-ignore
import {withAuthenticator} from 'aws-amplify-react-native';
import signUpConfig from './src/signUpConfig';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

// Amplify configuration
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
});

// Create navigation stack
const Stack = createNativeStackNavigator();

const App = () => {
  Auth.signOut();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// If you want more details than email and password, you need a separate config
export default withAuthenticator(App, { signUpConfig });