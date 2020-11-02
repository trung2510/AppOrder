import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { headerStyle } from '../styles/header'
import { hScale, vScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import Item_OrderScr from '../components/Item_OrderScr.js'
import View_Search from '../components/View_Search'
import {connect} from 'react-redux';
import {getListOrderAction} from '../redux/actions/OrderAction'


function OrderScreen({ navigation,getorder }) {

    const data = [
        {
            logo: images.ic_1688, //nhãn hiệu trang web đặt hàng
            id: 'exam_id1', //id đơn hàng
            deposit: 'Đã đặt cọc', //tình trạng đặt cọc
            img: images.ic_calenda, //ảnh sản phẩm
            shop_id: 'exam_id_shop', //id shop đặt sản phẩm
            amount: '1', //số lượng đặt mua
            weight: '1', //cân nặng tổng sản phẩm
            money: '123456', // tiền hàng
            purchase_fee: '123', //phí mua hàng
            total_amount: '123456', //tổng số tiền mua hàng
            paid: 'xxx', //đã thanh toán
            missing: 'yyyy', //còn thiếu
        },
        {
            logo: images.ic_1688, //nhãn hiệu trang web đặt hàng
            id: 'exam_id2', //id đơn hàng
            deposit: 'Đã đặt cọc', //tình trạng đặt cọc
            img: images.ic_calenda, //ảnh sản phẩm
            shop_id: 'exam_id_shop', //id shop đặt sản phẩm
            amount: '1', //số lượng đặt mua
            weight: '1', //cân nặng tổng sản phẩm
            money: '123456', // tiền hàng
            purchase_fee: '123', //phí mua hàng
            total_amount: '123456', //tổng số tiền mua hàng
            paid: 'xxx', //đã thanh toán
            missing: 'yyyy', //còn thiếu
        },
        {
            logo: images.ic_1688, //nhãn hiệu trang web đặt hàng
            id: 'exam_id3', //id đơn hàng
            deposit: 'Đã đặt cọc', //tình trạng đặt cọc
            img: images.ic_calenda, //ảnh sản phẩm
            shop_id: 'exam_id_shop', //id shop đặt sản phẩm
            amount: '1', //số lượng đặt mua
            weight: '1', //cân nặng tổng sản phẩm
            money: '123456', // tiền hàng
            purchase_fee: '123', //phí mua hàng
            total_amount: '123456', //tổng số tiền mua hàng
            paid: 'xxx', //đã thanh toán
            missing: 'yyyy', //còn thiếu
        }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fd2950" />
            <View style={headerStyle.header}>
                <Text style={headerStyle.title}>Danh sách đơn hàng</Text>
            </View>
            <TouchableOpacity onPress={getorder}><Text>get</Text></TouchableOpacity>
            <ScrollView>
                <View_Search/>

                <FlatList
                    style={{ marginTop: vScale(25) }}
                    data={data}
                    renderItem={({ item }) => <Item_OrderScr navigation={navigation} item={item} />}
                    keyExtractor={item => item.id}
                />

            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eeeeee'
    },
})

const mapStateToProp = (state) => {
    return{
        dataOrder : state.authReducers
    }
  }
  const mapDispatchToProp = (dispatch) => {
    return{
        getorder : () =>  dispatch(getListOrderAction()),
      
    }
  }
  export default connect(mapStateToProp,mapDispatchToProp)(OrderScreen)
