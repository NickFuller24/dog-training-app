import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale } from './scaling';

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: scale(23),
        top: verticalScale(10)
    },
    buttonSpace: {
        width: '100%',
        height: verticalScale(25)
    },
    logoImage: {
        width: scale(160),
        height: verticalScale(150),
    },
    logoContainer: {
        position: 'absolute',
        top: verticalScale(40),
        alignItems: "center",
    },
    logoText: {
        fontSize: scale(15),
    },
    signUpFullnameTextInput: {
        height: verticalScale(20),
        borderBottomWidth: '1%',
        top: verticalScale(10),
        fontSize: scale(20)
    },
    signUpGeneric: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: "red",
        top: verticalScale(30)
    },
    signUpInfoContainer: {
        top: verticalScale(220),
        width: '80%'
    },
    signUpPasswordTextInput: {
        height: verticalScale(20),
        borderBottomWidth: '1%',
        top: verticalScale(30),
        fontSize: scale(20)
    },
    signUpUserButton: {
        width: scale(50),
    },
    signUpUserButtonText: {
        fontSize: scale(15),
        color: 'black',
    },
    signUpTrainerButton: {
        width: scale(50),
    },
    signUpTrainerButtonText: {
        fontSize: scale(15),
        color: 'black'
    },
    signUpUsernameTextInput: {
        height: verticalScale(20),
        borderBottomWidth: '1%',
        top: verticalScale(20),
        fontSize: scale(20)
    },
    signUpUserTrainerContainer: {
        top: verticalScale(20),
        width: '100%',
        height: verticalScale(40),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    signUpWithContainer: {
        top: verticalScale(460),
        width: '80%',
        height: verticalScale(100),
        justifyContent: 'center',
        position: 'absolute'
    },
    signUpWithFacebook: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: "blue"
    },
    signUpWithGoogle: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: "green"
    },
})

export default styles;