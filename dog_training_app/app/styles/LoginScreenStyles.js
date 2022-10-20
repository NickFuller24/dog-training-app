import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        top: 350,
        width: '80%',
        height: '25%',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        top: 10
    },
    buttonSpace: {
        width: 20,
        height: 20
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 200,
        height: 200
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#4ecdc4"
    }
})

export default styles;