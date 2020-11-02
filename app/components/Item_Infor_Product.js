import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
export default function Item_Infor_Product({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.view_inf}>
                <View style={styles.img_product}>
                    <Image style={styles.content_img} source={item.imgProduct} />
                </View>
                <View style={styles.txt_product}>
                    <Text style={{ fontSize: hScale(18), color: '#0163d9' }}>{item.nameProduct}</Text>
                    <Text style={{ fontSize: hScale(18) }}>Size, Kích cỡ...</Text>
                    <Text style={{ fontSize: hScale(18) }}>Số lượng :</Text>
                    <Text style={{ fontSize: hScale(18) }}>Đơn giá : 123456</Text>
                    <Text style={{ fontSize: hScale(18), fontWeight: 'bold' }}>Thành tiền : xxxxx</Text>
                </View>
            </View>
            <View style={styles.view_note}>
                <Text style={{ fontWeight: 'bold', paddingRight: hScale(5) }}>Ghi Chú :</Text>
                <Text>Note</Text>
            </View>
            <View style={styles.view_btn}>
                <TouchableOpacity style={styles.btn_order}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: vScale(15) }}>THÊM GIỎ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_order}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: vScale(15) }}>KHIẾU NẠI</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: vScale(250),
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#dddcdc',
        marginBottom: vScale(5)
    },
    view_inf: {
        width: '100%',
        height: vScale(165),
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    view_note: {
        width: '100%',
        height: vScale(30),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 2
    },
    view_btn: {
        width: '100%',
        height: vScale(55),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },
    img_product: {
        width: hScale(135),
        height: vScale(145),
    },
    txt_product: {
        width: hScale(275),
        height: vScale(145),
        marginLeft: hScale(10),
        justifyContent: 'space-between'
    },
    content_img: {
        width: '100%',
        height: '100%'
    },
    btn_order: {
        width: hScale(90),
        height: vScale(35),
        backgroundColor: '#fd2950',
        borderRadius: hScale(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
})