import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./app/screens/LandingScreen";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import SignInScreen from "./app/screens/SignInScreen";
import ProfileScreen from "./app/screens/Profile/ProfileScreen";
import DogProfileScreen from "./app/screens/Profile/DogProfileScreen";
import SearchNewServiceScreen from "./app/screens/SearchNewServiceScreen";
import SearchNewServiceDateScreen from "./app/screens/SearchNewServiceDateScreen";
import HomeScreen from "./app/screens/HomeScreen";
import VendorListScreen from "./app/screens/vendorListScreen";
import CalendarScreen from "./app/screens/CalendarScreen";
import InboxScreen from "./app/screens/inboxScreen";

// Create navigation stack
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Create Account"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Dog Profile"
          component={DogProfileScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search New Service"
          component={SearchNewServiceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search New Service Date"
          component={SearchNewServiceDateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vendor List"
          component={VendorListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inbox"
          component={InboxScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
