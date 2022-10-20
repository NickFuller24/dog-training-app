import { StyleSheet } from 'react-native';

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

export default styles;