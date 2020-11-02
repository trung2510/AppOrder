import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {vScale,hScale} from '../commons/PerfectPixel'

export default function View_Toggle_Finance() {
    return (
        <View style={styles.view_toggle_finance}>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Tiền Hàng</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Phí Mua Hàng</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Phí Giá Trị Cao</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Phí Kiểm Đếm</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal} >Phí Đóng Gói</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Phí VCTQ-VN</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Phí Vận Chuyển Nội Địa TQ</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Trả Lại</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_bold}>Tổng Giá Trị</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_bold}>Đã Thanh Toán</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_bold}>Còn Thiếu</Text>
                <Text style={styles.txt_bold}>123.456đ</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view_toggle_finance: {
        width: '100%',
        height: vScale(627),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#dddcdc',
    },
    view_item_finance: {
        width: '100%',
        height: vScale(57),
        borderBottomColor: '#dddcdc'
        , borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    txt_normal:{
        fontSize:hScale(18)
    },
    txt_bold:{
        fontSize:hScale(18),
        fontWeight:'bold'
    }
})