import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

function LoginScreen(props: any) {
    return (
        <View
        style={styles.background} >
            <Image style={styles.logo} source={require("../assets/loginDogImage.png")}/>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4"
    }
})

export default LoginScreen;