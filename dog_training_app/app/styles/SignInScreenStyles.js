import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    loginInfoContainer: {
        top: 300,
        width: '80%'
    },
    loginInfoDetailsContainer: {
        flexDirection: 'row',
        width: '100%',
        top: 8,
        justifyContent: 'space-between',
    },
    loginInfoDetailsRememberMe: {
        flex: 1,
        paddingHorizontal: 10,
    },
    loginInfoDetailsRememberMeCheckbox: {
        width: 10,
        height: 10,
        borderWidth: 1,
        top: 4
    },
    loginInfoDetailsForgotPassword: {
    },
    loginUsernameTextInput: {
        height: 40,
        borderBottomWidth: 1,
        padding: 10,
    },
    loginPasswordTextInput: {
        height: 40,
        borderBottomWidth: 1,
        padding: 10,
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
        height: '100%',
        backgroundColor: "#4ecdc4"
    },
    signInGeneric: {
        width: '100%',
        height: 50,
        backgroundColor: "red"
    },
    signInWithContainer: {
        top: 400,
        width: '80%',
        height: '20%',
        justifyContent: 'center'
    },
    signInWithFacebook: {
        width: '100%',
        height: 50,
        backgroundColor: "blue"
    },
    signInWithGoogle: {
        width: '100%',
        height: 50,
        backgroundColor: "green"
    }
})

export default styles;