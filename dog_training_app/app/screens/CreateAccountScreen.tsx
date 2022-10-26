import { ConsoleLogger } from '@aws-amplify/core';
import React, { useState } from 'react';
import { View, Image, Text, Pressable, TextInput } from 'react-native';
import styles from '../styles/CreateAccountScreenStyles';

function CreateAccountScreen({navigation}: {navigation: any}) {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userButton, setUserButton] = useState(true);
    return (
        <View
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
            style={styles.signUpInfoContainer}>
                <TextInput
                style={styles.signUpFullnameTextInput}
                placeholder={"Full Name"}
                onChangeText={fullname => setFullname(fullname)}>
                </TextInput>
                <TextInput
                style={styles.signUpUsernameTextInput}
                placeholder={"Username"}
                onChangeText={username => setUsername(username)}>
                </TextInput>
                <TextInput
                style={styles.signUpPasswordTextInput}
                placeholder={"Password"}
                onChangeText={password => setPassword(password)}>
                </TextInput>
                <View style={styles.buttonSpace}/>


                <View
                style={styles.signUpUserTrainerContainer}>
                    <Pressable
                    style={[styles.signUpUserButton, userButton? {backgroundColor: 'pink'} : {backgroundColor: 'lightgray'}]}
                    onPress={() => setUserButton(true)}>
                        <Text
                        style={styles.signUpUserButtonText}>
                            User
                        </Text>
                    </Pressable>
                    <Pressable
                    style={[styles.signUpTrainerButton, userButton? {backgroundColor: 'lightgray'} : {backgroundColor: 'pink'}]}
                    onPress={() => setUserButton(false)}>
                        <Text
                        style={styles.signUpTrainerButtonText}>
                            Trainer
                        </Text>
                    </Pressable>
                </View>


                <Pressable
                style={styles.signUpGeneric}
                // ***Where authentication comes in, on this onPress. Check user data / register account***
                >
                    <Text
                    style={styles.buttonText}>
                        Create Account
                    </Text>
                </Pressable>
            </View>
            <View 
            style={styles.signUpWithContainer}>
                <Pressable 
                style={styles.signUpWithFacebook}>
                    <Text
                    style={styles.buttonText}>
                        Sign Up With Facebook
                    </Text>
                </Pressable>
                <View
                style={styles.buttonSpace} />
                <Pressable
                style={styles.signUpWithGoogle}>
                    <Text
                    style={styles.buttonText}>
                        Sign Up With Google
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default CreateAccountScreen;