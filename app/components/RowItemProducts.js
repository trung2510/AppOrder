import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { vScale, hScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import formatMoney from '../commons/async/FormatMoney'
import { connect } from 'react-redux'
import { deleteOrderItemAction, updateItemNoteAction, changeQuantityAction } from '../redux/actions/CategoryActions'
import Dialog from "react-native-dialog"
import SimpleToast from 'react-native-simple-toast'
import { fetchCategoryAction } from '../redux/actions/CategoryActions'
import LoadingCom from '../components/LoadingCom'


function RowItemProducts({ item, navigation, total_amount, onDeleteItemOrder, updateItemNote, dataNote, changeQuantity, page, onFetchCategory, dataQuantity }) {

    const data = item ? item : null
    const order_id = item ? item.order_id : null
    const item_id = item ? item.id : null
    const user_id = '1cadcee'

    // const note_type = dataNote ? dataNote.receivedUpdateItemNote.type : null
    // const quantity_type = dataQuantity ? dataQuantity.changeQuantityCategory.type : null

    const [dialogVisible, setDialogVisible] = useState(false)
    const [dialogVisibleb, setDialogVisibleb] = useState(false)

    const [quantity, setQuantity] = useState(item.order_quantity)
    const [valueQuantity, setValueQuantity] = useState('')

    const [note, setNote] = useState(item.note)

    const [orderId, setOrderId] = useState('')
    const [itemId, setItemId] = useState('')

    const handleCancelQuantity = () => {
        setDialogVisible(false), setQuantity(item.order_quantity)
    }

    const handleChangeOk = () => {
        setQuantity(valueQuantity)
        changeQuantity(paramsQuantity)
        SimpleToast.show('Api sửa số lượng lỗi, tạm thời sửa local')
        // onFetchCategory(user_id, page)

        // const quantity_type = dataQuantity ? dataQuantity.changeQuantityCategory.type : null

        // if (quantity_type !== 1) {
        //     setQuantity(item.order_quantity)
        //     setValueQuantity('')

        // } else {
        //     setQuantity(quantity)
        //     setValueQuantity('')
        //     SimpleToast.show('ok')
        // }
        setDialogVisible(false)
    }

    if (note === '') {
        setNote('Ghi chú')
    }

    const handleNoteOk = () => {
        updateItemNote(params)
        // const data_item_note = dataNote ? dataNote.receivedUpdateItemNote : null

        // if (data_item_note.type == 1) {
        //     SimpleToast.show(data_item_note.message);

        // } else {
        //     setNote('Ghi chú')
        //     SimpleToast.show(data_item_note.message);
        // }
        setDialogVisibleb(false)
    }
    const handleCancelNote = () => {
        setDialogVisibleb(false), setNote(item.note)
    }


    const into_money = (quantity, unitPrice) => {
        const price = quantity * unitPrice;
        return formatMoney(price)
    }

    const srcImage = (data.image != "" || data.image == null) ? { uri: data.image } : images.img_no_image

    const params = {
        order_id: orderId,
        user_id: user_id,
        item_id: itemId,
        note: note
    }

    const paramsQuantity = {
        order_id: orderId,
        user_id: user_id,
        item_id: itemId,
        quantity: quantity
    }

    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    {/* <LoadingCom visible={loadData} /> */}
                    {/* ------------------------------------------------------------------------------------------UI_item */}

                    <Image style={styles.img} source={srcImage} />
                    <View>
                        <TouchableOpacity
                        //  onPress = {() => <WebViewScreen/>}
                        >
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: 'blue', paddingTop: vScale(2), maxWidth: hScale(270) }}>{data.title}</Text>
                        </TouchableOpacity>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ paddingBottom: vScale(2), maxWidth: hScale(270) }}>{item.property}</Text>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => {
                                setOrderId(order_id),
                                    setItemId(item_id),
                                    setDialogVisible(!dialogVisible)
                            }
                            }
                        >
                            <Image
                                source={images.edit_btn}
                                style={styles.btn_edit}
                            />
                            <Text style={{ paddingBottom: vScale(2) }}>{quantity}</Text>
                            <Text style={{ paddingBottom: vScale(2) }}> x </Text>
                            <Text style={{ paddingBottom: vScale(2) }}>{formatMoney(item.price)}đ</Text>
                            {dialogVisible ?

                                <Dialog.Container visible={dialogVisible}>
                                    <Dialog.Title style={{ color: 'red' }}>Thay đổi số lượng</Dialog.Title>
                                    <Dialog.Description>Bạn có muốn thay đổi số lượng sản phẩm này?</Dialog.Description>
                                    <Dialog.Input

                                        keyboardType='number-pad'
                                        style={{ borderColor: '#808080', borderWidth: 0.5 }}
                                        value={valueQuantity}
                                        onChangeText={(text) => setValueQuantity(text)}
                                    />
                                    <Dialog.Button label="Hủy bỏ" onPress={() => handleCancelQuantity()} />
                                    <Dialog.Button label="Sửa" onPress={() => handleChangeOk()} />
                                </Dialog.Container>
                                : null
                            }
                        </TouchableOpacity>

                        <Text style={{ fontWeight: 'bold' }}>Thành tiền: {into_money(item.order_quantity, item.price)} đ</Text>

                        <View style={styles.item}>
                            <TouchableOpacity style={styles.view}
                                onPress={() => {
                                    setDialogVisibleb(!dialogVisibleb),
                                        setOrderId(order_id),
                                        setItemId(item_id)
                                }} >
                                <Image
                                    source={images.edit_btn}
                                    style={styles.btn_edit}
                                />
                                <Text style={{ maxWidth: hScale(120) }}>{note}</Text>
                                {dialogVisibleb ?
                                    <Dialog.Container visible={dialogVisibleb}>
                                        <Dialog.Title style={{ color: 'red' }}>Ghi chú</Dialog.Title>
                                        <Dialog.Description>Vui lòng nhập ghi chú</Dialog.Description>
                                        <Dialog.Input
                                            style={{ borderColor: '#808080', borderWidth: 0.5 }}
                                            value={note}
                                            onChangeText={(text) => setNote(text)}
                                        />
                                        <Dialog.Button label="Hủy bỏ" onPress={() => handleCancelNote()} />
                                        <Dialog.Button label="Sửa" onPress={() => handleNoteOk()} />
                                    </Dialog.Container>
                                    : null

                                }

                            </TouchableOpacity>


                            <TouchableOpacity style={styles.view}

                                onPress={() => {

                                    Alert.alert(
                                        "Xóa đơn hàng",
                                        "Bạn có muốn xóa đơn hàng này?",
                                        [
                                            {
                                                text: "Cancel",
                                                onPress: () => console.log("Cancel Pressed"),
                                                style: "cancel"
                                            },
                                            {
                                                text: "OK", onPress: () => onDeleteItemOrder(user_id, order_id)
                                            }
                                        ],
                                        { cancelable: false }
                                    )

                                }}

                            >
                                <Image
                                    source={images.icon_delete}
                                    style={styles.btn_edit}
                                />

                                <Text>Xóa</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </View>
        </ScrollView >
    )

}

const mapStateToProps = (state) => {
    return {
        dataQuantity: state.changeQuantityReducers,
        dataNote: state.updateItemNoteReducers,
    }

};


const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItemOrder: (user_id, order_id) => {
            dispatch(deleteOrderItemAction(user_id, order_id))
        },

        updateItemNote: (params) => {
            dispatch(updateItemNoteAction(params))
        },

        changeQuantity: (paramsQuantity) => {
            dispatch(changeQuantityAction(paramsQuantity))
        },
        onFetchCategory: (user_id, page) => { dispatch(fetchCategoryAction(user_id, page)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RowItemProducts)





const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: hScale(445),
        borderWidth: 0.3,
        borderColor: '#808080',
        backgroundColor: '#FFF',
        height: vScale(160)
    },
    img: {
        marginLeft: hScale(10),
        marginRight: hScale(15),
        width: hScale(130),
        height: vScale(130),
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: vScale(10)
    },
    tou: {
        marginTop: vScale(30),
        alignItems: 'center'
    },
    btn_edit: {
        width: hScale(18),
        height: vScale(18),
        marginRight: hScale(5)
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },

})

