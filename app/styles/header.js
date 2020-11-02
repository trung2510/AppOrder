import {StyleSheet} from 'react-native'
import {vScale, hScale} from '../commons/PerfectPixel'

export const headerStyle = StyleSheet.create({
    header : {
        height: vScale(80),
        width: '100%',
        backgroundColor: '#fd2950',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: hScale(20)
    }

})