import React, { useState, useCallback } from "react";
import { View, Image, Text, Pressable, TextInput } from "react-native";
import auth from "@react-native-firebase/auth";
import styles from "../styles/CreateAccountScreenStyles";

function CreateAccountScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = useCallback(() => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  }, [email, password]);

  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/loginDogImage.png")}
        />
        <Text style={styles.logoText}>Train your dog!</Text>
      </View>
      <View style={styles.signUpInfoContainer}>
        <TextInput
          style={styles.signUpUsernameTextInput}
          placeholder={"Email"}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.signUpPasswordTextInput}
          placeholder={"Password"}
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.buttonSpace} />
        <Pressable style={styles.signUpGeneric} onPress={createAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
      </View>
      <View style={styles.signUpWithContainer}>
        <Pressable style={styles.signUpWithFacebook}>
          <Text style={styles.buttonText}>Sign Up With Facebook</Text>
        </Pressable>
        <View style={styles.buttonSpace} />
        <Pressable style={styles.signUpWithGoogle}>
          <Text style={styles.buttonText}>Sign Up With Google</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default CreateAccountScreen;
