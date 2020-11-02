import {StyleSheet} from 'react-native'
import { vScale, hScale, radius } from '../commons/PerfectPixel'


export const styles_shared = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
     header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: vScale(55),
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#FD2950',
    },
    text_title: {
        color: 'white',
        fontSize: hScale(20),
        fontWeight: 'bold',
    },
    ic_back: {
        marginLeft: hScale(10),
        width: hScale(25),
        height: vScale(20),
    },
    ic_home_white: {
        marginRight: hScale(10),
        width: hScale(25),
        height: vScale(25),
    },
})
