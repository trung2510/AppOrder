import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import { Input } from 'react-native-elements'
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
export default function AddressScreen({ navigation }) {
    const [City, setCity] = useState('Chọn tỉnh/Thành phố')
    const [District, setDistrict] = useState('Chọn quận/Huyện')
    return (
        <SafeAreaView style={styles.container}>
            <MenuProvider >
                <View style={{ height: '100%' }}>
                    <View style={styles.view_img_header}>
                        <Image source={images.logo} style={styles.img_header} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.view_icon_back}>
                        <Image style={styles.img_icon_back} source={images.ic_back_pink} />
                    </TouchableOpacity>
                    <ScrollView style={styles.view_input}>
                        <Text style={styles.title_input}>Tên người nhận</Text>
                        <Input placeholder="Tên người nhận..."
                            containerStyle={styles.input_container}
                            inputContainerStyle={styles.input_txt}
                            placeholderTextColor="#dddcdc"
                        />
                        <Text style={styles.title_input}>Số điện thoại</Text>
                        <Input placeholder="Số điện thoại..."
                            containerStyle={styles.input_container}
                            inputContainerStyle={styles.input_txt}
                            placeholderTextColor="#dddcdc"
                        />
                        <Text style={styles.title_input}>Tỉnh | Thành phố</Text>

                        <Menu style={styles.input_container}>
                            <MenuTrigger
                                customStyles={{
                                    triggerOuterWrapper: styles.trigger_wrapper,
                                    triggerText: City === 'Chọn tỉnh/Thành phố' ? styles.trigger_text :  styles.trigger_text_choose,
                                    triggerWrapper: styles.trigger_wrap
                                }}

                                text={City}
                            />
                            <MenuOptions optionsContainerStyle={{ height: 500, position: 'relative' }}>
                                <MenuOption onSelect={() => setCity('Cầu Giấy')} text='Cầu Giấy' />
                                <MenuOption onSelect={() => setCity(`Mỹ Đình`)} text='Mỹ Đình' />
                            </MenuOptions>
                        </Menu>
                        <Text style={styles.title_input}>Quận | Huyện</Text>
                        <Menu style={styles.input_container}>
                            <MenuTrigger
                                customStyles={{
                                    triggerOuterWrapper: styles.trigger_wrapper,
                                    triggerText: District === 'Chọn quận/Huyện' ? styles.trigger_text :  styles.trigger_text_choose,
                                    triggerWrapper: styles.trigger_wrap

                                }}
                                text={District}
                            />
                            <MenuOptions optionsContainerStyle={{ height: 500, position: 'relative' }}>
                                <MenuOption onSelect={() => setDistrict('Cầu Giấy')} text='Cầu Giấy' />
                                <MenuOption onSelect={() => setDistrict(`Mỹ Đình`)} text='Mỹ Đình' />
                            </MenuOptions>
                        </Menu>
                        <Text style={styles.title_input}>Địa chỉ cụ thể</Text>
                        <Input placeholder="Địa chỉ cụ thể..."
                            containerStyle={styles.input_container}
                            inputContainerStyle={styles.input_txt}
                            placeholderTextColor="#dddcdc"
                        />
                        <Text style={styles.title_input}>Ghi chú</Text>
                        <Input placeholder="Ghi chú..."
                            containerStyle={styles.input_container}
                            inputContainerStyle={styles.input_txt}
                            placeholderTextColor="#dddcdc"
                        />
                        <View style={styles.view_btn}>
                            <TouchableOpacity style={styles.bg_btn}>
                                <Text style={styles.btn_txt}>Thêm/Sửa</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </MenuProvider>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dddcdc',
        alignItems: 'center',
        paddingBottom:vScale(15)
    },
    view_img_header: {
        width: '100%',
        height: vScale(150),
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_header: {
        width: hScale(330),
        height: vScale(110)
    },
    view_icon_back: {
        position: 'absolute',
        top: vScale(15),
        left: hScale(5)
    },
    img_icon_back: {
        width: hScale(25),
        height: vScale(18)
    },
    view_input: {
        width: hScale(420),
        height: vScale(525),
        marginTop: vScale(25)
    },
    title_input: {
        fontWeight: 'bold',
        marginTop: vScale(15),
        marginBottom: vScale(5)
    },
    input_container: {
        borderWidth: 1,
        borderColor: '#cdcdcd',
        backgroundColor: 'white',
        borderRadius: hScale(8),
        height: vScale(45)
    },
    input_txt: {
        borderBottomWidth: 0,
        height: vScale(45),

    },
    view_btn: {
        width: '100%',
        marginTop: vScale(25),
        alignItems: 'center',
    },
    bg_btn: {
        width: hScale(321),
        height: vScale(46),
        backgroundColor: '#fd2950',
        borderRadius: vScale(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    trigger_wrapper: {
        height: vScale(45),
        width: '100%',
    },
    trigger_text: {
        color: '#dddcdc',
        marginLeft: hScale(15),
        height: '100%',
        fontSize: vScale(20),
        marginTop: vScale(7)
    },
    trigger_wrap: {
        height: vScale(45)
    },
    trigger_text_choose: {
        marginLeft: hScale(15),
        height: '100%',
        fontSize: vScale(20),
        marginTop: vScale(7)
    },



})
