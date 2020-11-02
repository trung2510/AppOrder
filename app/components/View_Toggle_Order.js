import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {vScale,hScale} from '../commons/PerfectPixel'

export default function View_Toggle_Order() {
    return (
        <View style={styles.view_toggle_order}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.txt}>Tên Shop : </Text>
                <Text style={styles.txt}>123456 -exam code</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.txt}>Tỷ giá : </Text>
                <Text style={styles.txt}>123456 -exam code</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.txt}>Tống sổ lượng : </Text>
                <Text style={styles.txt}>123456 -exam code</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.txt}>Tổng cân nặng : </Text>
                <Text style={styles.txt}>123456 -exam code</Text>
            </View>
        </View>
    )
}
const  styles = StyleSheet.create({
    view_toggle_order: {
        width: '100%',
        height: vScale(195),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#dddcdc',
        padding: 10,
        justifyContent: 'space-around'
    },
    txt: {
        fontSize: hScale(18)
    },
})