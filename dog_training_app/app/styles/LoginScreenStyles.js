import { StyleSheet, Dimensions } from 'react-native';
import { scale, moderateScale, verticalScale } from './scaling';

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    buttonContainer: {
        top: verticalScale(250),
        width: '80%',
        height: verticalScale(150),
        justifyContent: 'center',
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
    loginButton: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: "pink",
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
    registerButton: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: "#FDB156",
    }
})

export default styles;