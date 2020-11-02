import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { headerStyle } from '../styles/header'
import { images } from '../assets/images'
import { hScale, vScale } from '../commons/PerfectPixel'
import { Input, Button } from 'react-native-elements';

export default function Validate_Phone_NumberScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={headerStyle.header}>
                <Text style={headerStyle.title}>Xác thực số điện thoại</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.touch_back}>
                <Image style={styles.img_back} source={images.ic_back} />
            </TouchableOpacity>
            <Image style={styles.img_logo} source={images.logo} />
            <Text style={styles.txt_alert}>
                Đã gửi tin nhắn đến số điện thoại đăng ký. Vui lòng kiểm tra tin nhắn và nhập mã xác thực !
            </Text>
            <Input
                placeholder="Nhập mã xác thực"
                containerStyle={{
                    width: hScale(200), height: vScale(50), borderWidth: 1, borderBottomWidth: 3, borderColor: '#cdcdcd'
                }}
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />
            <Button
                title="Xác nhận"
                buttonStyle={styles.btn_accept}

            />
            <View style={styles.view_edit}>
                <Button
                    title="Gửi lại"
                    buttonStyle={styles.btn_accept}

                />
                <View style={{ width: hScale(45) }}></View>
                <Button
                    title="Sửa"
                    buttonStyle={styles.btn_accept}

                />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    touch_back: {
        width: hScale(40),
        height: vScale(25),
        position: 'absolute',
        top: vScale(30),
        left: hScale(20)
    },
    img_back: {
        width: hScale(30),
        height: vScale(20)
    },
    img_logo: {
        width: hScale(415),
        height: vScale(145),
        marginTop: vScale(42)
    },
    txt_alert: {
        width: hScale(330),
        height: vScale(75),
        marginTop: vScale(85),
        textAlign: 'center'
    },
    btn_accept: {
        backgroundColor: '#fd2950',
        width: hScale(137),
        height: vScale(45),
        borderRadius: hScale(50),
        marginTop: vScale(50)
    },
    view_edit: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: vScale(60)
    }
})
