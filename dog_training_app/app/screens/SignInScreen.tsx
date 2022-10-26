import { ConsoleLogger } from '@aws-amplify/core';
import React, { useState } from 'react';
import { View, Image, Text, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/SignInScreenStyles.js';

function SignInScreen({navigation}: {navigation: any}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginError, setShowLoginError] = useState(false);
    const [rememberMeClicked, setRememberMeClicked] = useState(false);
    return (
        <KeyboardAvoidingView
        style={styles.background} >
            <View 
            style={styles.logoContainer}>
                <Image 
                style={styles.logoImage}
                source={require('../assets/loginDogImage.png')}/>
                <Text
                style={styles.logoText}>
                    Train your dog!
                </Text>
            </View>
            <View
            style={styles.loginInfoContainer}>
                {
                    showLoginError? (
                <Text
                style={styles.loginError}>
                    Your username or password is incorrect. Please try again.
                </Text>) : null
                }
                <TextInput
                style={styles.loginUsernameTextInput}
                placeholder={"Username"}
                onChangeText={username => setUsername(username)}>
                </TextInput>
                <TextInput
                style={styles.loginPasswordTextInput}
                placeholder={"Password"}
                onChangeText={password => setPassword(password)}>
                </TextInput>
                <View
                style={styles.loginInfoDetailsContainer}>
                    <Pressable
                    style={[styles.loginInfoDetailsRememberMeCheckbox, rememberMeClicked? {backgroundColor: 'blue'} : {backgroundColor: 'transparent'}]}
                    onPress={() => setRememberMeClicked(!rememberMeClicked)}/>
                    <Pressable
                    style={styles.loginInfoDetailsRememberMe}
                    onPress={() => setRememberMeClicked(!rememberMeClicked)}>
                        <Text>Remember Me</Text>
                    </Pressable>
                    <Pressable
                    style={styles.loginInfoDetailsForgotPassword}>
                        <Text>Forgot Password?</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonSpace}/>
                <Pressable
                style={styles.signInGeneric}
                // ***Where authentication comes in, on this onPress. Check user info with database***
                //onPress={() => setShowLoginError(!showLoginError)}
                >
                    <Text
                    style={styles.buttonText}>
                        Sign In
                    </Text>
                </Pressable>
            </View>
            <View 
            style={styles.signInWithContainer}>
                <Pressable 
                style={styles.signInWithFacebook}>
                    <Text
                    style={styles.buttonText}>
                        Sign In With Facebook
                    </Text>
                </Pressable>
                <View
                style={styles.buttonSpace} />
                <Pressable
                style={styles.signInWithGoogle}>
                    <Text
                    style={styles.buttonText}>
                        Sign In With Google
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}

export default SignInScreen;