import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import { images } from '../assets/images'
import { vScale, hScale } from '../commons/PerfectPixel'
import { CheckBox, Button } from 'react-native-elements'
import RowItemProducts from './RowItemProducts'
import MyDialogNoInput from './MyDialogNoInput'
import MyDialog from './MyDialog'
import formatMoney from '../commons/async/FormatMoney'
import { connect } from 'react-redux'
import { deleteOrderAction, updateServiceAction } from '../redux/actions/CategoryActions'
import SimpleToast from 'react-native-simple-toast'

function RowItemCategory({
    navigation,
    item,
    onDeleteOrder,
    data_user,
    updateService,
    checkedTotalItem,
    callbackChecked,
    callbackArr,
    callbackTotalSp,

}) {

    const money = data_user ? data_user.user.account_balance : '0'
    const data_order = item ? item.order : []
    const order_id = item ? item.order.id : null
    const total_amount = item.order.total_amount
    const data_items = item ? item.items : []
    const data_fee = item ? item.fee : []
    const data_services = item ? item.services : []
    const order_code = data_order ? data_order.code : ''
    const homeland = data_order ? data_order.seller_homeland : 'TAOBAO'

    const [dialogNoInputVisible, setDialogNoInputVisible] = useState(false);
    const [dialogNoInputCheckingVisible, setDialogNoInputCheckingVisible] = useState(false);
    const [dialogNoInputExpressVisible, setDialogNoInputExpressVisible] = useState(false);
    const [dialogNoInputWoodVisible, setDialogNoInputWoodVisible] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);

    const [servicesChecking, setServicesChecking] = useState(data_services[0].is_choose);
    const [servicesExpress, setServicesExpress] = useState(data_services[1].is_choose);
    const [servicesWood, setServicesWood] = useState(data_services[2].is_choose);

    const handleCancel = () => { setDialogNoInputVisible(false) }
    const handleRecharge = () => { setDialogNoInputVisible(false) }

    const _cancelPay = () => { setDialogVisible(false) }
    const _acceptPay = () => { setDialogVisible(false) }

    const handleCancelChecking = () => {
        setDialogNoInputCheckingVisible(false),
            setDialogNoInputExpressVisible(false),
            setDialogNoInputWoodVisible(false)
    }
    const handleAceptChecking = () => {
        setServicesChecking(!servicesChecking)
        updateService(params)
        setDialogNoInputCheckingVisible(false)

    }

    const handleAceptExpress = () => {
        updateService(params)
        setServicesExpress(!servicesExpress)
        setDialogNoInputExpressVisible(false)
    }

    const handleAceptWood = () => {
        setServicesWood(!servicesWood)
        updateService(params)
        setDialogNoInputWoodVisible(false)
    }

    const [checked, setChecked] = useState(true);
    const [serviceCode, setServiceCode] = useState('');
    const _onDialog = () => {
        if (data_order.real_amount > money) {
            setDialogNoInputVisible(!dialogNoInputVisible)
        } else {
            setDialogVisible(!dialogVisible)
        }
    }

    const user_id = '1cadcee'

    const params = {
        user_id: user_id,
        order_id: order_id,
        service_code: serviceCode
    }

    const _onCheckedItem = () => {
        setChecked(!checked),
            callbackChecked(checked),
            callbackTotalSp(item.order.order_quantity, checked, item.order.total_amount)
    }

    const _setIcon = (homeland) => {
        switch (homeland) {
            case 'TAOBAO':
                return images.icon_taobao
            case '1688':
                return images.ic_1688
            case 'ORDERQC':
                return images.icon_taobao
            default:
                return images.icon_taobao
        }
    }

    useEffect(() => {
        setChecked(checkedTotalItem)
    }, [checkedTotalItem])
    return (
        <View style={{ marginVertical: vScale(10) }} >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: hScale(445),
                height: vScale(50),
                backgroundColor: '#FFF',
                borderWidth: 0.5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderColor: '#808080',

            }}>

                <CheckBox
                    containerStyle={{ marginLeft: 0, marginRight: 0 }}
                    checkedIcon={
                        <Image
                            source={images.checkbox_checked}
                            style={styles.checkbox}
                        />
                    }
                    uncheckedIcon={
                        <Image
                            source={images.checkbox_unchecked}
                            style={styles.checkbox}
                        />
                    }
                    checked={checked}
                    onPress={() => { _onCheckedItem() }}
                />

                <Image
                    source={_setIcon(homeland)}
                    style={styles.ic_taobao}
                />

                <TouchableOpacity>
                    <Text style={styles.id}>{order_code}</Text>
                </TouchableOpacity>

                <Text style={{ flex: 1 }} />

                <TouchableOpacity
                    onPress={() => {

                        Alert.alert(
                            "Xóa Shop",
                            "Bạn có muốn xóa tất cả đơn hàng của shop này?",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "OK", onPress: () => {
                                        onDeleteOrder(user_id, order_id), callbackArr(order_id)
                                        SimpleToast.show('Xóa thành công')
                                    }
                                }
                            ],
                            { cancelable: false }
                        )
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Image
                        source={images.icon_delete}
                        style={styles.ic_taobao}
                    />
                    <Text style={{ paddingRight: hScale(5), paddingLeft: hScale(5) }}>Xóa Đơn</Text>

                </TouchableOpacity>
            </View>
            {/* --------------------------------------------------------------------------------------- */}
            <View>

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={data_items}
                        renderItem={({ item }) =>
                            <RowItemProducts
                                // page={page}
                                total_amount={total_amount}
                                item={item}
                                navigation={navigation}

                            />}
                        keyExtractor={() => Math.random()}
                    />

                </View>

                {/* -----------------------------------------------------------------------------tinh_tien */}
                {/* ---------------checkbox */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: hScale(445),
                    height: vScale(50),
                    backgroundColor: '#FFF',
                    borderWidth: 0.2,
                    justifyContent: 'space-around',
                    borderColor: '#808080'
                }}>

                    <CheckBox
                        title={data_services[0].title}
                        containerStyle={{ marginLeft: 0, marginRight: -10, }}
                        checkedIcon={
                            <Image
                                source={images.checkbox_checked}
                                style={styles.checkbox}
                            />
                        }
                        uncheckedIcon={
                            <Image
                                source={images.checkbox_unchecked}
                                style={styles.checkbox}
                            />
                        }
                        checked={servicesChecking}
                        onPress={() => {
                            setServiceCode(data_services[0].service_code),
                                setDialogNoInputCheckingVisible(true)
                        }}
                    />

                    {(data_services[0].is_choose == false) ?
                        dialogNoInputCheckingVisible
                            ? <MyDialogNoInput
                                title='Đăng ký dịch vụ'
                                dialogVisible={dialogNoInputCheckingVisible}
                                handleCancel={handleCancelChecking}
                                handleDelete={handleAceptChecking}
                                note='Bạn có muốn đăng ký dịch vụ kiểm hàng ? '
                                rightButton='Đồng ý'
                            />
                            : null
                        : dialogNoInputCheckingVisible ?
                            <MyDialogNoInput
                                title='Hủy dịch vụ'
                                dialogVisible={dialogNoInputCheckingVisible}
                                handleCancel={handleCancelChecking}
                                handleDelete={handleAceptChecking}
                                note='Bạn có muốn hủy dịch vụ kiểm hàng ? '
                                rightButton='Đồng ý'
                            />
                            : null
                    }

                    <CheckBox
                        title={data_services[1].title}
                        containerStyle={{ marginLeft: 0, marginRight: -10 }}
                        checkedIcon={
                            <Image
                                source={images.checkbox_checked}
                                style={styles.checkbox}
                            />
                        }
                        uncheckedIcon={
                            <Image
                                source={images.checkbox_unchecked}
                                style={styles.checkbox}
                            />
                        }
                        checked={servicesExpress}
                        onPress={() => {
                            setServiceCode(data_services[1].service_code),
                                setDialogNoInputExpressVisible(true)
                        }}
                    />

                    {(data_services[1].is_choose == false) ?
                        dialogNoInputExpressVisible
                            ? <MyDialogNoInput
                                title='Đăng ký dịch vụ'
                                dialogVisible={dialogNoInputExpressVisible}
                                handleCancel={handleCancelChecking}
                                handleDelete={handleAceptExpress}
                                note='Bạn có muốn đăng ký dịch vụ chuyển nhanh ? '
                                rightButton='Đồng ý'
                            />
                            : null
                        : dialogNoInputExpressVisible ?
                            <MyDialogNoInput
                                title='Hủy dịch vụ'
                                dialogVisible={dialogNoInputExpressVisible}
                                handleCancel={handleCancelChecking}
                                handleDelete={handleAceptExpress}
                                note='Bạn có muốn hủy dịch vụ chuyển nhanh ? '
                                rightButton='Đồng ý'
                            />
                            : null
                    }

                    <CheckBox
                        title={data_services[2].title}
                        containerStyle={{ marginLeft: 0, marginRight: -10 }}
                        checkedIcon={
                            <Image
                                source={images.checkbox_checked}
                                style={styles.checkbox}
                            />
                        }
                        uncheckedIcon={
                            <Image
                                source={images.checkbox_unchecked}
                                style={styles.checkbox}
                            />
                        }
                        checked={servicesWood}
                        onPress={() => {
                            setServiceCode(data_services[2].service_code),
                                setDialogNoInputWoodVisible(true)
                        }}
                    />

                    {(data_services[2].is_choose == false) ?
                        dialogNoInputWoodVisible
                            ? <MyDialogNoInput
                                title='Đăng ký dịch vụ'
                                dialogVisible={dialogNoInputWoodVisible}
                                handleCancel={handleCancelChecking}
                                handleDelete={handleAceptWood}
                                note='Bạn có muốn đăng ký dịch vụ đóng gỗ ? '
                                rightButton='Đồng ý'
                            />
                            : null
                        : dialogNoInputWoodVisible ?
                            <MyDialogNoInput
                                title='Hủy dịch vụ'
                                dialogVisible={dialogNoInputWoodVisible}
                                handleCancel={handleCancelChecking}
                                handleDelete={handleAceptWood}
                                note='Bạn có muốn hủy dịch vụ đóng gỗ ? '
                                rightButton='Đồng ý'
                            />
                            : null
                    }


                </View>

                {/* -------------------tinhtien */}

                <View style={{
                    height: vScale(420),
                    width: hScale(445),
                    borderWidth: 0.5,
                    borderColor: '#808080',
                    backgroundColor: '#FFF',
                }} >

                    <View style={styles.text_tt}>
                        <Text>Tổng số lượng:</Text>
                        <Text>{data_order.order_quantity}</Text>
                    </View>

                    <View style={styles.text_tt}>
                        <Text>Phí mua hàng:</Text>
                        <Text>{formatMoney(data_fee.buying_fee.discount_fee)}đ({formatMoney(data_fee.buying_fee.origin_fee)}đ)</Text>
                    </View>

                    <View style={styles.text_tt}>
                        <Text>Phí giá trị cao:</Text>
                        <Text>{formatMoney(data_fee.high_value_fee)}đ</Text>
                    </View>

                    <View style={styles.text_tt}>
                        <Text>Phí kiểm đếm:</Text>
                        <Text>{formatMoney(data_fee.checking_fee)}đ</Text>
                    </View>

                    <View style={styles.text_tt}>
                        <Text>Tổng tiền hàng:</Text>
                        <Text>{formatMoney(data_order.total_amount)}đ</Text>
                    </View>

                    <View style={styles.text_tt}>
                        <Text>Tiền cọc:</Text>
                        <Text>{formatMoney(data_order.deposit_amount_require)}đ</Text>
                    </View>

                    <View style={styles.text_tt}>
                        <Text>Tổng giá trị:</Text>
                        <Text style={{ color: '#fd2950', fontWeight: 'bold' }}>{formatMoney(data_order.real_amount)}đ</Text>
                    </View>

                    <View style={styles.deposit}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                            onPress={() => {
                                navigation.navigate('ChatScreen', {
                                    order_code: order_code,
                                    order_id: order_id
                                }
                                )
                            }}
                        >
                            <Image
                                source={images.edit_btn}
                                style={styles.btn_edit}
                            />
                            <Text>Trao đổi trên đơn hàng</Text>
                        </TouchableOpacity>

                        <Text style={{ flex: 1 }} />
                        <Button
                            buttonStyle={{ backgroundColor: '#fd2950', width: hScale(95), height: vScale(35) }}
                            titleStyle={{ fontSize: 13 }}
                            title="Đặt cọc"
                            onPress={() => _onDialog()}
                        />

                        {
                            dialogNoInputVisible
                                ? <MyDialogNoInput
                                    title='Đặt cọc đơn hàng'
                                    dialogVisible={dialogNoInputVisible}
                                    handleCancel={handleCancel}
                                    handleDelete={handleRecharge}
                                    note='Số tiền đặt cọc không đủ'
                                    rightButton='Nạp tiền'
                                />
                                : null
                        }

                        {
                            dialogVisible
                                ? <MyDialog
                                    title='Xác Nhận'
                                    dialogVisible={dialogVisible}
                                    handleCancel={_cancelPay}
                                    handleDelete={_acceptPay}
                                    placeholder='Mật khẩu'
                                    note='Vui lòng nhập mật khẩu xác thực'
                                    rightButton='Thanh toán'
                                />
                                : null
                        }

                    </View>

                </View>
            </View>

        </View >

    )

}
const mapStateToProps = (state) => {
    return {
        data: state.fetchCategoryReducers,
    }

};


const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteOrder: (user_id, order_id) => {
            dispatch(deleteOrderAction(user_id, order_id))
        },
        updateService: (params) => {
            dispatch(updateServiceAction(params))
        },
        // onFetchCategory: (user_id, page) => { dispatch(fetchCategoryAction(user_id, page)) },


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RowItemCategory)

const styles = StyleSheet.create({
    img: {
        marginLeft: hScale(10),
        marginRight: hScale(15),
        width: hScale(140),
        height: vScale(140),
    },
    text: {
        paddingVertical: vScale(20),
        fontSize: 13,
    },
    tou: {
        marginTop: vScale(30),
        alignItems: 'center'
    },
    checkbox: {
        width: hScale(20),
        height: vScale(20)
    },

    ic_taobao: {
        width: hScale(25),
        height: vScale(25)
    },
    id: {
        color: 'blue',
        marginLeft: hScale(8)
    },
    text_tt: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: vScale(10),
        paddingHorizontal: hScale(5),
        paddingBottom: vScale(19),
        fontSize: 13
    },
    btn_edit: {
        width: hScale(18),
        height: vScale(18),
        marginRight: hScale(5)
    },
    deposit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: hScale(5)
    },

})

