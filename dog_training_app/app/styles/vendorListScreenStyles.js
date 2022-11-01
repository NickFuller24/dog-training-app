import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale } from './scaling';

const styles = StyleSheet.create({
    backButton: {
        height: verticalScale(40),
    },
    backButtonText: {
        fontSize: scale(40),
    },
    background: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: scale(15)
    }
})

export default styles;