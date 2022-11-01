import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale } from './scaling';

const styles = StyleSheet.create({
    background: {
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        flex: 1,
        //backgroundColor: 'blue'
    },
    navBarContainer: {
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        height: verticalScale(60),
        justifyContent: 'space-evenly',
        width: '100%'
    },
    navBarContainerButton: { 
        alignItems: 'center',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    }
})

export default styles;