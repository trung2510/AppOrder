import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'

export default function Item_Notification({ item,navigation }) {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Tab_Detailed_InformationScreen')}>
            <View style={{width:hScale(100),height:vScale(100), alignItems:'center',justifyContent:'center'}}>
                <Image style={{ width:hScale(80),height:vScale(80)}} source={item.img_product}/>
            </View>
            <View style={{height:vScale(80),marginTop:vScale(10),width:hScale(330)}}>
                <Text>Đơn hàng {item.code_product} đã được .....</Text>
                <Text>{item.day_product}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: vScale(100),
        marginBottom: vScale(10),
        borderRadius: hScale(10),
        flexDirection:'row',
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:3,
        borderColor:'#dddcdc'
    }
})