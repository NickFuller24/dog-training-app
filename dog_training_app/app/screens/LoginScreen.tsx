import React, { useState } from "react";
import { View, Image, Text, Pressable, TextInput } from "react-native";
import styles from "../styles/LoginScreenStyles.js";

function LoginScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/loginDogImage.png")}
        />
        <Text style={styles.logoText}>Train your dog!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Sign In")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <View style={styles.buttonSpace} />
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Dog Profile")}
        >
          <Text style={styles.buttonText}>Dog</Text>
        </Pressable>
        <View style={styles.buttonSpace} />
        <Pressable
          style={styles.registerButton}
          onPress={() => navigation.navigate("Create Account")}
        >
          <Text style={styles.buttonText}>Create an Account</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginScreen;
