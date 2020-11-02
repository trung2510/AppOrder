import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import { CheckBox } from 'react-native-elements'

export default function Item_CartSrc({item}) {
    const [IsChecked, setIsChecked] = useState(false)
    return (
        <View style={styles.view_product}>
                <View style={styles.title_address}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            containerStyle={styles.checkbox_container}
                            checkedIcon={<Image source={images.ic_ischecked} style={styles.icon_checkbox} />}
                            uncheckedIcon={<Image source={images.ic_uncheck} style={styles.icon_checkbox} />}
                            checked={IsChecked}
                            onPress={() => setIsChecked(!IsChecked)}
                        />
                        <Image style={styles.logocheckbox} source={images.ic_tmall} />
                        <Text>{item.shopname}</Text>
                    </View>
                    <TouchableOpacity style={styles.touch_edit}>
                        <Image style={styles.img_edit} source={images.ic_delete_shop} />
                        <Text>Xóa shop</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view_infor}>
                    <View style={styles.view_img_product}>
                        <Image style={styles.souce_product} source={images.img_vay} />
                    </View>
                    <View style={{ justifyContent: 'space-between', padding: vScale(10) }}>
                        <Text>Tên sản phẩm</Text>
                        <Text>Kích cỡ</Text>

                        <View style={styles.touch_edit}>
                            <TouchableOpacity>
                                <Image style={styles.img_edit} source={images.ic_edit_btn} />
                            </TouchableOpacity>
                            <Text>Số lượng x Giá Tiền</Text>
                        </View>

                        <Text style={{ fontWeight: 'bold' }}>Thành tiền : 123456đ</Text>
                        <View style={styles.touch_double}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image style={styles.img_edit} source={images.ic_edit_btn} />
                                </TouchableOpacity>
                                <Text>Ghi chú</Text>
                            </View>
                            <TouchableOpacity style={styles.touch_edit}>
                                <Image style={styles.img_edit} source={images.ic_delete_shop} />
                                <Text>Xóa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.view_order_one}>
                    <Text>Số lượng : 1</Text>
                    <Text>Tổng tiền : 123456đ</Text>
                    <TouchableOpacity style={styles.btn_order}>
                        <Text style={{ color: 'white', fontWeight: 'bold',fontSize:vScale(15) }}>ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    title_address: {
        width: '100%',
        height: vScale(48),
        borderBottomWidth: 2,
        borderBottomColor: '#dddcdc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    touch_edit: {
        marginRight: hScale(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    img_edit: {
        width: hScale(15),
        height: vScale(15),
        marginRight: hScale(5)
    },
    view_product: {
        width: hScale(445),
        height: vScale(270),
        marginTop: vScale(15),
        borderRadius: hScale(10),
        borderColor: '#dddcdc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        backgroundColor: '#ffffff'
    },
    checkbox_container: {
        height: vScale(20),
        width: hScale(20),
        marginRight: hScale(20)
    },
    icon_checkbox: {
        width: hScale(20),
        height: vScale(20)
    },
    logocheckbox: {
        width: hScale(25),
        height: vScale(25),
        marginRight: hScale(10)
    },
    view_infor: {
        height: vScale(165),
        width: '100%',
        flexDirection: 'row'
    },
    view_img_product: {
        width: hScale(140),
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    souce_product: {
        width: hScale(125),
        height: vScale(125)
    },
    touch_double: {
        flexDirection: 'row',
        width: hScale(260),
        justifyContent: 'space-between'
    },
    view_order_one: {
        height: vScale(55),
        width: '100%',
        backgroundColor: '#f7eeee',
        borderRadius: hScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: hScale(10),
        paddingLeft: hScale(10)
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
