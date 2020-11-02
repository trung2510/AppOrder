import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import { CheckBox } from 'react-native-elements'
import View_Toggle_Finance from '../components/View_Toggle_Finance'
import View_Toggle_Order from '../components/View_Toggle_Order'
import View_Toggle_Product from '../components/View_Toggle_Product'


export default function InforScreen() {
    const [IsChecked, setIsChecked] = useState(false)
    const [Togglefinance, setTogglefinance] = useState(false)
    const [ToggleOrder, setToggleOrder] = useState(false)
    const [ToggleProduct, setToggleProduct] = useState(false)


    return (
        <View style={styles.container}  >
            <ScrollView style={styles.view_content}>
                <View style={styles.view_check}>
                    <View style={styles.view_check_title}>
                        <View style={styles.view_status}>
                            <Text style={styles.txt_status}>Đã đặt cọc</Text>
                        </View>
                        <TouchableOpacity style={styles.view_chat}>
                            <Image style={styles.ic_chat} source={images.chat_icon} />
                            <Text>Trao đổi trên đơn</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.view_check_content}>
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
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={() => setTogglefinance(!Togglefinance)} style={styles.information}>
                    <Text style={styles.txt_information}>Thông tin tài chính</Text>
                    {Togglefinance
                        ?
                        <Image style={styles.arrow} source={images.up_arrow} />
                        :
                        <Image style={styles.arrow} source={images.ic_dow} />
                    }
                </TouchableOpacity>
                {
                    Togglefinance
                        ?
                        <View_Toggle_Finance />
                        :
                        null
                }

                <TouchableOpacity onPress={() => setToggleOrder(!ToggleOrder)} style={styles.information}>
                    <Text style={styles.txt_information}>Thông tin đơn hàng</Text>
                    {ToggleOrder
                        ?
                        <Image style={styles.arrow} source={images.up_arrow} />
                        :
                        <Image style={styles.arrow} source={images.ic_dow} />
                    }
                </TouchableOpacity>
                {ToggleOrder
                    ?
                    <View_Toggle_Order />
                    :
                    null
                }

                <TouchableOpacity onPress={() => setToggleProduct(!ToggleProduct)} style={styles.information}>
                    <Text style={styles.txt_information}>Thông tin sản phẩm</Text>
                    {ToggleProduct
                        ?
                        <Image style={styles.arrow} source={images.up_arrow} />
                        :
                        <Image style={styles.arrow} source={images.ic_dow} />
                    }
                </TouchableOpacity>
                {ToggleProduct
                    ?
                    <View_Toggle_Product />

                    :
                    null
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view_content: {
        width: hScale(440),
        height: vScale(677),
        backgroundColor: '#ffffff',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#dddcdc',
        borderRadius: hScale(7),
    },
    view_check: {
        width: '100%',
        height: vScale(102),
        borderWidth: 1,
        borderColor: '#dddcdc',
        borderRadius: hScale(7),
    },
    view_check_title: {
        width: '100%',
        height: vScale(50),
        borderBottomWidth: 2,
        borderColor: '#dddcdc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    view_status: {
        width: hScale(75),
        height: vScale(33),
        borderWidth: 1,
        borderColor: '#dddcdc',
        backgroundColor: 'green',
        borderRadius: hScale(7),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: hScale(5)
    },
    txt_status: {
        fontSize: vScale(12),
        color: 'white',
        fontWeight: 'bold'
    },
    view_chat: {
        width: hScale(175),
        height: vScale(33),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ic_chat: {
        width: hScale(22),
        height: vScale(22),
        marginRight: hScale(10)
    },
    view_check_content: {
        width: '100%',
        height: vScale(52),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    icon_checkbox: {
        width: hScale(20),
        height: vScale(20)
    },
    check_box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    information: {
        width: '100%',
        height: vScale(53),
        marginTop: vScale(15),
        backgroundColor: '#dddcdc',
        borderTopRightRadius: hScale(7),
        borderTopLeftRadius: hScale(7),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: hScale(10),
        paddingRight: hScale(10)
    },
    txt_information: {
        fontWeight: 'bold',
        fontSize: vScale(20)
    },
    arrow: {
        width: hScale(20),
        height: vScale(10)
    },
    container_checkbox: {
        width: hScale(20),
        height: vScale(20),
        justifyContent: 'center',
        alignItems: 'center'
    }


})