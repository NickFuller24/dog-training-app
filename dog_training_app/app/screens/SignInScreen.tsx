import React, { useState, useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import {
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView
} from "react-native";
import styles from "../styles/SignInScreenStyles";

function SignInScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);
  const [rememberMeClicked, setRememberMeClicked] = useState(false);

  const signIn = React.useCallback(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home", { userID: user.uid });
        // ...
      })
      .catch((error) => {
        setShowLoginError(true);
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
            Log-in
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
            onPress={signIn}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </Pressable>
          <View style={styles.subHeaderContainer}>
            <View style={styles.subHeaderLine}/>
            <Text style={styles.subHeaderText}>
              or log-in with
            </Text>
            <View style={styles.subHeaderLine}/>
          </View>
          <View style={styles.socialsContainer}>
            <Pressable style={styles.socialLogoContainer}>
              <Image
                style={styles.socialLogo}
                source={require("../assets/googleLogo.png")}
              />
            </Pressable>
            <Pressable style={styles.socialLogoContainer}>
              <Image
                style={styles.socialLogo}
                source={require("../assets/facebookLogo.png")}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignInScreen;
