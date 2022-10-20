import { ConsoleLogger } from '@aws-amplify/core';
import React, { useState } from 'react';
import { View, Image, Text, Pressable, TextInput } from 'react-native';
import styles from '../styles/SignInScreenStyles.js';

function SignInScreen({navigation}: {navigation: any}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View
        style={styles.background} >
            <View 
            style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../assets/loginDogImage.png")}/>
                    <Text>Train your dog!</Text>
            </View>
            <View
            style={styles.loginInfoContainer}>
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
                    style={styles.loginInfoDetailsRememberMeCheckbox}/>
                    <Pressable
                    style={styles.loginInfoDetailsRememberMe}>
                        <Text>Remember Me</Text>
                    </Pressable>
                    <Pressable
                    style={styles.loginInfoDetailsForgotPassword}>
                        <Text>Forgot Password?</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonSpace}/>
                <Pressable
                style={styles.signInGeneric}>
                    <Text
                    style={styles.buttonText}>
                        Sign In
                    </Text>
                </Pressable>
            </View>
            <View 
            style={styles.signInWithContainer}>
                <Pressable 
                style={styles.signInWithFacebook} >
                    <Text
                    style={styles.buttonText}>
                        Sign In With Facebook
                    </Text>
                </Pressable>
                <View
                style={styles.buttonSpace} />
                <Pressable
                style={styles.signInWithGoogle} >
                    <Text
                    style={styles.buttonText}>
                        Sign In With Google
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default SignInScreen;