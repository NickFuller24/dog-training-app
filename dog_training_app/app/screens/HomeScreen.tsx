import React from "react";
import {
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/HomeScreenStyles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

function HomeScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {

  // Get user ID so we can populate screen
  const { userID } = route.params;

  return (
    <Background>
      <Navbar navigation={navigation} userID={userID} selected={"Home"}/>
    </Background>
  );
}

export default HomeScreen;
