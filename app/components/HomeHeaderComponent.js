import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { images } from '../assets/images'
import { hScale, vScale } from '../commons/PerfectPixel'
import call from 'react-native-phone-call'



export default function HomeHeaderComponent({ navigation, data_user }) {

    const args = {
        number: '6855', // Use commas to add time between digits.
        prompt: false
    }


    return (

        <View style={styles.view}>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Cart') }}
                style={styles.tou} >
                <Image
                    source={images.img_cart}
                    style={styles.img}
                />
                <Text>Giỏ hàng</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.tou} onPress={() => { navigation.navigate('HomeCate', { data_user }) }}>
                <Image
                    source={images.img_category}
                    style={styles.img}
                />
                <Text>Chờ Đặt Cọc</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tou} onPress={() => { navigation.navigate('HomeTransactionScreen') }}>
                <Image
                    source={images.img_transaction}
                    style={styles.img}
                />
                <Text>Giao Dịch</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tou} onPress={() => call(args).catch(console.error)}>
                <Image
                    source={images.img_contact}
                    style={styles.img}
                />
                <Text>Liên Hệ</Text>
            </TouchableOpacity>

        </View>


    )

}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: hScale(35),
        marginVertical: vScale(10)
    },
    img: {
        width: hScale(50),
        height: vScale(50),
        resizeMode: 'stretch'
    },
    tou: {
        alignItems: 'center'
    }
})

