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
    },
    triggerSelectionItem: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        flexDirection: 'row',
        height: verticalScale(70),
        //top: verticalScale(30),
    },
    triggerSelectionItemContent: {
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 10
    },
    triggerSelectionItemContentImage: {
        alignSelf: 'center',
        height: verticalScale(30),
        width: scale(30),
    },
    triggerSelectionItemContentText: {
        fontSize: scale(16),
        left: scale(15),
    },
    triggerSelectionScroll: {
        alignSelf: 'center',
        height: verticalScale(1000),
        top: verticalScale(30),
        width: '80%',
    },
    triggerSelectionSpace: {
        height: verticalScale(20)
    },
    triggerSelectionTopText: {
        alignSelf: 'center',
        fontSize: scale(22),
        top: verticalScale(30),
        width: '80%',
        //backgroundColor: 'red'
    }
})

export default styles;