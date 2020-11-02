import React, { useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { images } from '../assets/images'
import { vScale, hScale } from '../commons/PerfectPixel'
import formatMoney from '../commons/async/FormatMoney'

export default function HomeTitleComponent({ data_user }) {


    const fullname = data_user ? data_user.user.full_name : 'api err'
    const money = data_user ? data_user.account_balance : '0'

    return (
        <View style={styles.view}>
            <Text style={styles.hello}>Xin chào, {fullname}</Text>
            <Text style={{ flex: 1 }} />

            <Image
                source={images.icon_money}
                style={styles.img}
            />

            <Text style={styles.text_money} >{formatMoney(money)}</Text>
            <Text style={styles.txt_d}>đ</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        marginTop: vScale(2),
        alignItems: 'center',
        borderBottomWidth: 0.5,
        padding: 5,
        borderBottomColor: '#cdcdcd'
    },
    hello: {
        fontWeight: "bold", fontSize: 13
    },
    img: {
        width: hScale(15),
        height: vScale(15),
        marginRight: hScale(5)
    },
    text_money: {
        marginRight: hScale(2)
    },
    txt_d: {
        color: 'blue',
        textDecorationLine: 'underline'
    }


})

