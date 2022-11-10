import React, { useState, useCallback } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Image, Text, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/SignInScreenStyles.js';

function SignInScreen({navigation}: {navigation: any}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginError, setShowLoginError] = useState(false);
    const [rememberMeClicked, setRememberMeClicked] = useState(false);

    const signIn = useCallback( () => {
        auth()
            .signInWithEmailAndPassword(username, password)
            .then(() => {
                console.log('User signed in!');
                console.log( username );
                console.log( password );
            })
            .catch(error => {
                // if (error.code === 'auth/email-already-in-use') {
                // console.log('That email address is already in use!');
                // }

                // if (error.code === 'auth/invalid-email') {
                // console.log('That email address is invalid!');
                // }

                console.error(error);
            });
    }, [ username, password ] );

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
                secureTextEntry={true}
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
                    onPress={signIn}
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