import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
import { headerStyle } from '../styles/header'
import { images } from '../assets/images'
import View_Order_Confirm_Information from '../components/View_Order_Confirm_Information'
import { CheckBox } from 'react-native-elements'

export default function Order_ConfirmationScreen({ navigation }) {
    const [IsChecked, setIsChecked] = useState(false)
    return (
        <View style={styles.container}  >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.ic_back} source={images.ic_back} />
                </TouchableOpacity>
                <Text style={headerStyle.title}>Xác nhận đơn hàng</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Nav')}>
                    <Image style={styles.icon_home} source={images.iconHome} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginBottom: vScale(10) }}>
                <View_Order_Confirm_Information />
                <View style={styles.view_text}>
                    <Text style={styles.txt_clone}>
                        Danh sách sản phẩm
                </Text>
                </View>
                <View style={styles.view_product}>
                    <View style={styles.view_id}>
                        <Image souce={images.ic_1688} style={styles.ic_shop} />
                        <Text style={styles.txt_id}>exam id</Text>
                        <Text style={{ position: 'absolute', right: hScale(10) }}>Số lượng</Text>
                    </View>


                    <View style={styles.view_content_product}>
                        <Image source={images.img_vay} style={styles.img_product} />
                        <View style={styles.infor_img_product}>
                            <Text style={styles.txt_blue_color}>Tên Shop </Text>
                            <Text>Size </Text>
                            <Text>Số lượng x giá tiền</Text>
                            <Text style={styles.txt_bold}>Thành tiền</Text>
                        </View>
                    </View>
                    <View  style={styles.view_check_content}>
                        <ScrollView horizontal={true}>
                        <View style={styles.check_box} >
                            <CheckBox
                                containerStyle={styles.container_checkbox}
                                checkedIcon={<Image source={images.ic_ischecked} style={styles.icon_checkbox} />}
                                uncheckedIcon={<Image source={images.ic_uncheck} style={styles.icon_checkbox} />}
                                checked={IsChecked}
                                onPress={() => setIsChecked(!IsChecked)}
                            />
                            <Text>Kiểm hàng</Text>
                        </View>
                        <View style={styles.check_box}>
                            <CheckBox
                                containerStyle={styles.container_checkbox}
                                checkedIcon={<Image source={images.ic_ischecked} style={styles.icon_checkbox} />}
                                uncheckedIcon={<Image source={images.ic_uncheck} style={styles.icon_checkbox} />}
                                checked={IsChecked}
                                onPress={() => setIsChecked(!IsChecked)}
                            />
                            <Text>CPN TQ-VN</Text>
                        </View>
                        <View style={styles.check_box}>
                            <CheckBox
                                containerStyle={styles.container_checkbox}
                                checkedIcon={<Image source={images.ic_ischecked} style={styles.icon_checkbox} />}
                                uncheckedIcon={<Image source={images.ic_uncheck} style={styles.icon_checkbox} />}
                                checked={IsChecked}
                                onPress={() => setIsChecked(!IsChecked)}
                            />
                            <Text style={{ marginRight: hScale(15) }}>Đóng gói</Text>
                        </View>
                        </ScrollView>
                    </View>
                    <View style={styles.view_product_second}>

                        <View style={{ justifyContent: 'space-around',marginLeft:hScale(10) }}>
                            <Text>Tổng tiền hàng : </Text>
                            <Text>Đặt cọc : </Text>
                            <Text>Phí mua hàng : </Text>
                            <Text>Phí giá trị cao : </Text>
                            <Text>Phí kiểm hàng : </Text>
                            <Text>Tổng giá trị đơn : </Text>
                        </View>
                        <View style={{ justifyContent: 'space-around', width: hScale(280), alignItems: 'flex-end' }}>
                            <Text>123</Text>
                            <Text>123</Text>
                            <Text>123</Text>
                            <Text>123</Text>
                            <Text>123</Text>
                            <Text style={styles.txt_bold_color}>123</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.view_search}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.advanced_search}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'green' }}>QUAY LẠI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch_search}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>KẾT ĐƠN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dddcdc',
        alignItems: 'center',
    },
    ic_back: {
        width: hScale(24),
        height: vScale(24),
        marginLeft: hScale(10)
    },
    header: {
        height: vScale(80),
        width: '100%',
        backgroundColor: '#fd2950',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: vScale(5)
    },
    icon_home: {
        width: hScale(24),
        height: vScale(24),
        marginRight: hScale(10)
    },
    view_text: {
        width: hScale(452),
        height: vScale(40),
        justifyContent: 'center'
    },
    txt_clone: {
        fontWeight: 'bold',
        fontSize: vScale(20),
        marginLeft: hScale(5)
    },
    view_product: {
        width: hScale(452),
        height: vScale(450),
        borderColor: '#cdcdcd',
        borderTopWidth: 2,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: hScale(10),
        borderTopRightRadius: hScale(10),
        backgroundColor: 'white'
    },
    view_id: {
        width: '100%',
        height: vScale(50),
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#cdcdcd'
    },
    img_product: {
        width: hScale(140),
        height: vScale(90),
        marginTop: vScale(8),
        left: hScale(8),
        marginRight: hScale(5),
        resizeMode: 'contain'
    },
    view_content_product: {
        height: vScale(125),
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#cdcdcd',
        alignItems: 'center'
    },
    infor_img_product: {
        width: hScale(350),
        height: '100%',
        justifyContent: 'space-around'
    },
    txt_id: {
        position: 'absolute',
        left: hScale(40),
        fontSize: hScale(20)
    },
    txt_blue_color: {
        color: '#0163d9',
        fontSize: hScale(20)
    },
    txt_bold: {
        fontWeight: 'bold',
        fontSize: hScale(20)
    },
    ic_shop: {
        width: hScale(24),
        height: vScale(24),
        backgroundColor: 'red',
        left: hScale(10)
    },
    view_check_content: {
        width: hScale(452),
        height: vScale(52),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#cdcdcd',


    },
    check_box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container_checkbox: {
        width: hScale(20),
        height: vScale(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon_checkbox: {
        width: hScale(20),
        height: vScale(20)
    },
    view_product_second: {
        width: hScale(450),
        height: vScale(200),
        flexDirection: 'row',
    },
    txt_bold_color: {
        fontWeight: 'bold',
        fontSize: hScale(20),
        color: '#fd2950'
    },
    view_search: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginBottom: vScale(10)
    },
    touch_search: {
        width: hScale(215),
        height: vScale(48),
        backgroundColor: '#fd2950',
        marginRight: hScale(12),
        justifyContent: 'center',
        borderRadius: hScale(50)
    },
    advanced_search: {
        width: hScale(215),
        height: vScale(48),
        borderWidth: 2,
        borderColor: '#cdcdcd',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: hScale(50)
    },
})