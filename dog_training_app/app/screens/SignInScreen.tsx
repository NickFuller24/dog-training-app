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
} from "react-native";
import styles from "../styles/SignInScreenStyles.js";

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
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          // style={styles.logoImage}
          source={require("../assets/loginDogImage.png")}
        />
        <Text style={styles.logoText}>Train your dog!</Text>
      </View>
      <View style={styles.loginInfoContainer}>
        {showLoginError ? (
          <Text style={styles.loginError}>
            Your email or password is incorrect. Please try again.
          </Text>
        ) : null}
        <TextInput
          style={styles.loginUsernameTextInput}
          placeholder={"Email"}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.loginPasswordTextInput}
          placeholder={"Password"}
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.loginInfoDetailsContainer}>
          <Pressable
            style={[
              styles.loginInfoDetailsRememberMeCheckbox,
              rememberMeClicked
                ? { backgroundColor: "blue" }
                : { backgroundColor: "transparent" },
            ]}
            onPress={() => setRememberMeClicked(!rememberMeClicked)}
          />
          <Pressable
            style={styles.loginInfoDetailsRememberMe}
            onPress={() => setRememberMeClicked(!rememberMeClicked)}
          >
            <Text>Remember Me</Text>
          </Pressable>
          <Pressable style={styles.loginInfoDetailsForgotPassword}>
            <Text>Forgot Password?</Text>
          </Pressable>
        </View>
        <View style={styles.buttonSpace} />
        <Pressable style={styles.signInGeneric} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
      <View style={styles.signInWithContainer}>
        <Pressable style={styles.signInWithFacebook}>
          <Text style={styles.buttonText}>Sign In With Facebook</Text>
        </Pressable>
        <View style={styles.buttonSpace} />
        <Pressable style={styles.signInWithGoogle}>
          <Text style={styles.buttonText}>Sign In With Google</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignInScreen;
