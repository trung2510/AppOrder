import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { images } from '../assets/images'
import Item_Notification from '../components/Item_Notification'
import { vScale, hScale } from '../commons/PerfectPixel'

export default function NotificationScreen({navigation}) {
    const data_notification = [
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
        {
            img_product: images.img_vay,
            code_product: 'exam_code_product2',
            day_product : 'ngày / tháng / năm'
        },
    ]
    return (
        <View style={styles.container}>
            <View style={{ width: hScale(440), height: '100%' }}>
                <FlatList
                    data={data_notification}
                    renderItem={({ item }) => <Item_Notification navigation={navigation} item={item} />}
                    keyExtractor={item => item.code_product}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: vScale(20),
        paddingBottom: vScale(20),
        paddingLeft: hScale(20),
        paddingRight: hScale(20),
        backgroundColor: 'white',
        alignItems: 'center'
    }
})
//440*100