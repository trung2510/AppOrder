import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'

export default function Item_OrderScr({ item,navigation }) {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Tab_Detailed_InformationScreen')} style={styles.container}>
            <View style={styles.view_id}>
                <Image souce={item.logo} style={{ width: hScale(24), height: vScale(24), backgroundColor: 'red', left: hScale(10) }} />
                <Text style={{ position: 'absolute', left: hScale(40), color: '#0163d9' }}>{item.id}</Text>
                <Text style={{ position: 'absolute', right: hScale(10), fontWeight: 'bold', color: '#0163d9' }}>{item.deposit}</Text>
            </View>
            <View style={styles.view_product}>
                <View style={{ height: vScale(100), flexDirection: 'row' }}>
                    <Image source={item.img} style={styles.img_product} />
                    <View style={styles.infor_img_product}>
                        <Text>Tên Shop : {item.shop_id}</Text>
                        <Text>Số lượng : {item.amount}</Text>
                        <Text>Cân nặng : {item.weight}</Text>
                    </View>
                </View>

                <View style={{ height: vScale(162), flexDirection: 'row' }}>
                    <View style={styles.money_one}>
                        <Text>Tiền hàng : </Text>
                        <Text>Tổng phí : </Text>
                        <Text>Tổng giá trị : </Text>
                    </View>
                    <View style={{ width: hScale(250), right: 2, flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Text style={styles.txt_normal}>{item.money}</Text>
                        <Text style={styles.txt_normal}>{item.purchase_fee}</Text>
                        <Text style={styles.txt_bold_color}>{item.total_amount}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: vScale(78) }}>
                <View style={styles.money_two}>
                    <Text>Đã thanh toán : </Text>
                    <Text>Còn thiếu : </Text>
                </View>
                <View style={{ width: hScale(250), right: 2, flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Text style={styles.txt_bold_black}>{item.paid}</Text>
                    <Text style={styles.txt_bold_black}>{item.missing}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: hScale(450),
        height: vScale(390),
        backgroundColor: '#ffffff',
        marginTop: vScale(10),
        borderColor: '#cdcdcd',
        borderBottomWidth: 3,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 0.2,
        borderRadius:hScale(15)
    },
    view_id: {
        width: '100%',
        height: vScale(50),
        backgroundColor: '#eeeeee',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    view_product: {
        height: vScale(262),
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#fcdfdf',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    img_product: {
        width: hScale(80),
        height: vScale(80),
        marginTop: vScale(8),
        left: hScale(8),
        marginRight: hScale(5)
    },
    infor_img_product: {
        flexDirection: 'column',
        justifyContent: 'center',
        left: hScale(10)
    },
    money_one: {
        width: hScale(200),
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        left: hScale(10)
    },
    money_two: {
        width: hScale(200),
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        left: hScale(10)
    },
    txt_normal: {
        width: '100%',
        textAlign: 'right',
        right: hScale(10)
    },
    txt_bold_black: {
        width: '100%',
        textAlign: 'right',
        right: hScale(10),
        fontWeight: 'bold'
    },
    txt_bold_color: {
        width: '100%',
        textAlign: 'right',
        right: hScale(10),
        color: '#fd0835',
        fontWeight: 'bold'
    }

})

