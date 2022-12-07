import { ConsoleLogger } from "@aws-amplify/core";
import React, { useState, Fragment } from "react";
import { View, Image, Text, Pressable, TextInput, ImageBackground } from "react-native";
import styles from "../styles/LandingScreenStyles";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

function LandingScreen({ navigation }: { navigation: any }) {
  const randomInt = Math.floor(Math.random() * (6 - 1) + 1);
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
    'Gelasio-Regular': require('../assets/fonts/Gelasio-Regular.ttf'),
    'Gelasio-Bold': require('../assets/fonts/Gelasio-Bold.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if( !fontsLoaded ) {
    return null;
  }

  if( randomInt === 1 ) {
    return (
      <ImageBackground
        source={require("../assets/landingDog1.png")}
        style={styles.background}
        onLayout={onLayoutRootView}
      >
        <LandingScreenContent navigation={navigation}/>
      </ImageBackground>
    );
  } else if( randomInt === 2 ) {
    return (
      <ImageBackground
        source={require("../assets/landingDog2.png")}
        style={styles.background}
        onLayout={onLayoutRootView}
      >
        <LandingScreenContent navigation={navigation}/>
      </ImageBackground>
    );
  } else if( randomInt === 3 ) {
    return (
      <ImageBackground
        source={require("../assets/landingDog3.png")}
        style={styles.background}
        onLayout={onLayoutRootView}
      >
        <LandingScreenContent navigation={navigation}/>
      </ImageBackground>
    );
  } else if( randomInt === 4 ) {
    return (
      <ImageBackground
        source={require("../assets/landingDog4.png")}
        style={styles.background}
        onLayout={onLayoutRootView}
      >
        <LandingScreenContent navigation={navigation}/>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        source={require("../assets/landingDog5.png")}
        style={styles.background}
        onLayout={onLayoutRootView}
      >
        <LandingScreenContent navigation={navigation}/>
      </ImageBackground>
    );
  }

}

const LandingScreenContent = ({ navigation }: { navigation: any }) => {
  return (
    <Fragment>
      <View style={styles.whistleContainer}>
        <Image source={require("../assets/whiteWhistle.png")}/>
        <Text style={styles.whistleText}>
          Dog Trainer App
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Sign In")}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("Create Account")}
        >
          <Text style={styles.createAccountText}>Create Account</Text>
        </Pressable>
      </View>
    </Fragment>
  );
}

export default LandingScreen;
