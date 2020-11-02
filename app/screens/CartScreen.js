import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import { CheckBox } from 'react-native-elements'
import Item_CartSrc from '../components/Item_CartSrc'
export default function CartScreen({navigation}) {
    const [IsChecked, setIsChecked] = useState(false)
    const data = [
        {
            shopname: 'aaa'
        },
        {
            shopname: 'bbb'
        },
        {
            shopname: 'ccc'
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            {
                IsChecked ?
                    <View style={styles.view_add_address}>
                        <View style={styles.view_title_add}>
                            <Text>
                                Địa chỉ nhận hàng
                            </Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddressScreen')} style={styles.view_btn_add}>
                            <View style={styles.bg_btn_add}>
                                <Text style={{color:'white',fontWeight:'bold'}}>
                                    THÊM
                                </Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.view_address}>
                        <View style={styles.title_address}>
                            <Text style={{ marginLeft: hScale(5) }}>Địa chỉ nhận hàng</Text>
                            <TouchableOpacity style={styles.touch_edit}>
                                <Image style={styles.img_edit} source={images.ic_edit_btn} />
                                <Text>Sửa</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content_address}>
                            <Text style={{ fontWeight: 'bold',fontSize:vScale(15) }}>Linh Kiubo - 0358608906</Text>
                            <Text style={{ fontStyle: 'italic',fontSize:vScale(15)  }}>số 6, ngõ 208, đường Phương Canh, Quận Nam Từ Liêm, Hà Nội</Text>
                            <Text style={{ color: '#01574b',fontSize:vScale(15)  }}>Liên hệ trước khi giao</Text>
                        </View>
                    </View>
            }
            <FlatList
                style={{ top: vScale(10), marginBottom:vScale(70) }}
                data={data}
                renderItem={({ item }) => <Item_CartSrc item={item} />}
                keyExtractor={item => item.shopname}
            />
            <View style={styles.view_order_two}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        containerStyle={styles.checkbox_container}
                        checkedIcon={<Image source={images.ic_ischecked} style={styles.icon_checkbox} />}
                        uncheckedIcon={<Image source={images.ic_uncheck} style={styles.icon_checkbox} />}
                        checked={IsChecked}
                        onPress={() => setIsChecked(!IsChecked)}
                    />
                    <Text>Tất cả</Text>
                    <TouchableOpacity>
                        <Image style={styles.img_delete} source={images.ic_delete} />
                    </TouchableOpacity>
                    <Text>1</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', right: hScale(10) }}>
                    <Text>Số tiền hàng</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Order_ConfirmationScreen')} style={styles.btn_order}>
                        <Text style={{ color: 'white', fontWeight: 'bold',fontSize:vScale(15) }}>TIẾP TỤC</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#f1f0f0'
    },
    view_address: {
        width: hScale(445),
        height: vScale(150),
        marginTop: vScale(10),
        borderRadius: hScale(10),
        borderColor: '#dddcdc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        backgroundColor: '#ffffff'
    },
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
    content_address: {
        height: vScale(102),
        width: '100%',
        justifyContent: 'space-around',
        padding: 10
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
    view_order_two: {
        width: '100%',
        height: vScale(55),
        position: 'absolute',
        bottom: 0,
        borderTopColor: '#dddcdc',
        borderTopWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f1f0f0'
    },
    img_delete: {
        width: hScale(15),
        height: vScale(20),
        marginLeft: hScale(10),
        marginRight: hScale(10)
    },
    view_add_address: {
        width: hScale(445),
        height: vScale(97),
        borderRadius: hScale(10),
        borderColor: '#dddcdc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        backgroundColor: '#ffffff',
        marginTop: vScale(10)
    },
    view_title_add: {
        width: '100%',
        height: vScale(48),
        borderColor: '#dddcdc',
        borderBottomWidth: 2,
        justifyContent: 'center',
        paddingLeft: hScale(5)
    },
    view_btn_add: {
        width: '100%',
        height: vScale(49),
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg_btn_add: {
        width: hScale(352),
        height: vScale(40),
        backgroundColor: '#fd2950',
        borderRadius: vScale(5),
        justifyContent: 'center',
        alignItems: 'center',
    }


})

//mau tim 01574b
//mau xanh 3468cc
//mau xam f7eeee