import { ConsoleLogger } from "@aws-amplify/core";
import React, { useState } from "react";
import { View, Image, Text, Pressable, TextInput, ScrollView } from "react-native";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/CreateAccountScreenStyles";

function CreateAccountScreen({ navigation }: { navigation: any }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userButton, setUserButton] = useState(true);

  const createAccount = React.useCallback(() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home", { userID: user.uid });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }, [email, password]);

  return (
    <View style={styles.background}>
      <Image 
        source={require("../assets/dogWithStick.png")}
        style={styles.image}
      />
      <View style={styles.whistleContainer}>
        <Image source={require("../assets/whiteWhistle.png")}/>
        <Text style={styles.whistleText}>
          Dog Trainer App
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={styles.bottomContainer}
        scrollEnabled={false}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Create Account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>
            Email
          </Text>
            <TextInput
              style={styles.inputText}
              placeholder="email address"
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          <Text style={styles.inputHeader}>
            Password
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="password"
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
            onChangeText={setPassword}
          />
          <Pressable
            onPress={createAccount}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>
              Create Account
            </Text>
          </Pressable>
          <View style={styles.subHeaderContainer}>
            <View style={styles.subHeaderLine}/>
            <Text style={styles.subHeaderText}>
              or create an account with
            </Text>
            <View style={styles.subHeaderLine}/>
          </View>
          <View style={styles.socialsContainer}>
            <Pressable style={styles.socialLogoContainer}>
              <Image
                source={require("../assets/googleLogo.png")}
              />
            </Pressable>
            <Pressable style={styles.socialLogoContainer}>
              <Image
                source={require("../assets/facebookLogo.png")}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CreateAccountScreen;
