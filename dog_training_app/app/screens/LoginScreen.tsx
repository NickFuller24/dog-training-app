import { ConsoleLogger } from '@aws-amplify/core';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({navigation}: {navigation: any}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View
        style={styles.background} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/loginDogImage.png")}/>
                <Text>Train your dog!</Text>
            </View>
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.loginUsername}
                    placeholder={"Username"}
                    onChangeText={username => setUsername(username)} />
                <TextInput
                    style={styles.loginPassword}
                    placeholder={"Password"}
                    onChangeText={password => setPassword(password)} />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.loginButton}
                    //onPress={() => console.log(username, password)} --> *** DO AWS AUTH HERE ***
                    >
                    <Text
                        style={styles.buttonText}>
                    Login</Text>
                </Pressable>
                <Pressable
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Register')} >
                    <Text
                        style={styles.buttonText}>
                    Register</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        top: 400,
        width: '80%',
        height: '25%',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: '100%',
        backgroundColor: "#fc5c65"
    },
    loginContainer: {
        position: 'absolute',
        top: 250,
        alignItems: "center",
        width: '80%'
    },
    loginPassword: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        top: 20,
        width: '70%',
    },
    loginUsername: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: '70%',
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: '100%',
        backgroundColor: "#4ecdc4"
    }
})

export default LoginScreen;