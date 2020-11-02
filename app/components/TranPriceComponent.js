
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import formatMoney from '../commons/async/FormatMoney'
import { vScale, hScale } from '../commons/PerfectPixel'


function TranPriceComponent({ data_tran }) {
    const tien_nap = data_tran ? data_tran.total_amount_order_deposit : null
    const thanh_toan = data_tran ? data_tran.total_amount_payment : null
    const tra_lai = data_tran ? data_tran.total_amount_refund : null
    const so_du = data_tran ? data_tran.account_balance : null
    const chua_ve = data_tran ? data_tran.total_amount_before_delivery : null
    const cho_giao = data_tran ? data_tran.total_amount_waiting_delivery : null
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <View style={styles.view_a}>
                <View style={styles.view_b}>
                    <View style={styles.view_c}>
                        <Text>Tổng tiền nạp</Text>
                        <Text style={styles.text_money}>{formatMoney(tien_nap)}đ</Text>
                    </View>

                    <View style={styles.view_d}>
                        <Text>Tổng thanh toán</Text>
                        <Text style={styles.text_money}>{formatMoney(thanh_toan)}đ</Text>
                    </View>
                </View>
                {/* -------------------------------------------------------------------------------------tong_tra_lai */}

                <View style={styles.view_b}>
                    <View style={styles.view_c}>
                        <Text>Tổng trả lại</Text>
                        <Text style={styles.text_money}>{formatMoney(tra_lai)}đ</Text>
                    </View>

                    <View style={styles.view_d}>
                        <Text>Số dư hiện tại</Text>
                        <Text style={styles.text_money}>{formatMoney(so_du)}đ</Text>
                    </View>
                </View>
                {/* -------------------------------------------------------------------------------------tien_hang_chua_ve */}

                <View style={styles.view_e}>
                    <View style={styles.view_c}>
                        <Text>Tiền hàng chưa về</Text>
                        <Text style={styles.text_money}>{formatMoney(chua_ve)}đ</Text>
                    </View>

                    <View style={styles.view_d}>
                        <Text>Tiền hàng chờ giao</Text>
                        <Text style={styles.text_money}>{formatMoney(cho_giao)}đ</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TranPriceComponent

const styles = StyleSheet.create({
    view_a: {
        width: '100%',
        height: vScale(235),
        borderColor: '#808080',
        borderWidth: 0.8,
        alignItems: 'center',
        paddingTop: vScale(10),
        backgroundColor: '#FFF'
    },
    view_b: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        width: hScale(415),
        height: vScale(70),
        marginTop: vScale(3)
    },
    view_e: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: hScale(415),
        height: vScale(70)
    },
    view_c: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderColor: '#808080',
        width: hScale(205),
        height: vScale(65),
        marginVertical: vScale(3)
    },
    view_d: {
        alignItems: 'center',
        justifyContent: 'center',
        width: hScale(205),
        height: vScale(65),
        marginVertical: vScale(3)

    },
    text_money: {
        paddingTop: vScale(8),
        fontWeight: 'bold'
    }
})

