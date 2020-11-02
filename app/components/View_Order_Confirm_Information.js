import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { vScale, hScale } from '../commons/PerfectPixel'

export default function View_Toggle_Finance() {
    return (
        <View style={styles.view_toggle_finance}>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_title}>Thông tin tài chính</Text>
            
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Tổng số lượng :</Text>
                <Text style={styles.txt_normal}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Phí mua hàng</Text>
                <Text style={styles.txt_normal}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Phí giá trị cao</Text>
                <Text style={styles.txt_normal}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal} >Phí kiểm hàng</Text>
                <Text style={styles.txt_normal}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Tổng tiền hàng</Text>
                <Text style={styles.txt_normal}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Đã đặt cọc</Text>
                <Text style={styles.txt_normal}>123.456đ</Text>
            </View>
            <View style={styles.view_item_finance}>
                <Text style={styles.txt_normal}>Tổng giá trị</Text>
                <Text style={styles.txt_color}>123.456đ</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view_toggle_finance: {
        width: hScale(452),
        height: vScale(450),
        backgroundColor: 'white',
        borderColor: '#cdcdcd',
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: hScale(10)
    },
    view_item_finance: {
        width: '100%',
        height: vScale(56),
        borderBottomColor: '#dddcdc'
        , borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    txt_normal: {
        fontSize: hScale(18)
    },
    txt_bold: {
        fontSize: hScale(18),
        fontWeight: 'bold'
    },
    txt_title :{
        fontSize:hScale(22)
    },
    txt_color:{
        fontWeight:'bold',
        color:'#fd2950',
        fontSize:hScale(20)
    }
})