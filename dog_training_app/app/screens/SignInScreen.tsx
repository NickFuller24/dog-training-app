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
      <View style={styles.bottomContainer}>
        <Text style={styles.headerText}>
          Log-in
        </Text>
      </View>
    </View>
  );
}

export default SignInScreen;
