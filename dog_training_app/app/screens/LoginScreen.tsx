import React, { useState, createRef } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TextInput } from 'react-native';

function LoginScreen(props: any) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const passwordInputRef = createRef();

    return (
        <View style={styles.background}>
            <Image style={styles.logo} source={require("../assets/loginDogImage.png")}/>

			<View style={styles.sectionStyle}>
				<TextInput 
					style={styles.inputText}
					placeholder='Enter Email'
					placeholderTextColor='#8b9cb5'
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='email-address'
					returnKeyType='next'
					underlineColorAndroid='#f000'
					onChangeText={(email) => setEmail(email)}
					onSubmitEditing={() =>
						passwordInputRef.current &&
						passwordInputRef.current.focus()
					}
					enablesReturnKeyAutomatically={true}
					blurOnSubmit={false}
				/>
			</View>
			<View style={styles.sectionStyle}>
				<TextInput
					style={styles.inputText}
					placeholder='Enter Password'
					placeholderTextColor='#8b9cb5'
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='default'
					returnKeyType='next'
					underlineColorAndroid='#f000'
					onChangeText={(password) => setPassword(password)}
					ref={passwordInputRef}
					enablesReturnKeyAutomatically={true}
					blurOnSubmit={false}
					secureTextEntry={true}
				/>
			</View>

            <View style={styles.registerButton}>
				<Text 
					style={styles.buttonText}
					onPress={() => navigation.navigate('RegisterScreen')}>
					New user? Click here to register!
				</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#e6c683'
    },
    loginButton: {
        width: '35%',
        height: 70,
        backgroundColor: "#fc5c65",
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#400e0e'
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50
    },
    registerButton: {
        width: '35%',
        height: 70,
        backgroundColor: "#4ecdc4",
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#091f1d'
    },
    buttonText: {
    	color: '#FFFFFF',
    	textAlign: 'center',
    	fontWeight: 'normal',
    	fontSize: 22,
    	paddingVertical: 18
    },
    inputText: {
    	flex: 1,
    	color: 'white',
    	backgroundColor: '#fc5c65',
    	paddingLeft: 15,
    	paddingRight: 15,
    	borderWidth: 1,
    	borderRadius: 30,
    	borderColor: '#dadae8'
    },
    sectionStyle: {
    	flexDirection: 'row',
    	height: 40,
    	marginTop: 20,
    	marginLeft: 35,
    	marginRight: 35,
    	margin: 10
    }
})

export default LoginScreen;
