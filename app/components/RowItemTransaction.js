import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { vScale, hScale, radius } from '../commons/PerfectPixel'
import formatMoney from '../commons/async/FormatMoney'


export default function RowItemTransaction({ item }) {
    const tran_code = item ? item.transaction_code : 'api err'
    const created_time = item ? item.created_time : 'api err'
    const tran_type_title = item ? item.transaction_type_title : 'api err'
    const tran_detal = item ? item.transaction_detail : 'api err'
    const amount = item ? item.amount : 'api err'

    // const filterItems = (query) => {
    //     return item.filter((el)=>{
    //         return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    //     })
    // }

    // console.log(data);


    return (
        <ScrollView>


            <View style={{
                width: hScale(455),
                height: vScale(155),
                backgroundColor: '#EEE',
                borderColor: '#808080',
                borderWidth: 0.5,
                marginVertical: vScale(5),
                marginHorizontal: hScale(2),
                borderRadius: 5,

            }}>
                {/* -------title */}
                <View style={{
                    width: '100%',
                    height: vScale(50),
                    backgroundColor: '#E0DFDF',
                    borderColor: '#808080,',
                    borderRadius: 5,
                    flexDirection: 'row'
                }}
                >
                    <View>
                        <Text style={{
                            paddingTop: vScale(10),
                            paddingLeft: hScale(10),
                            position: 'absolute',
                        }}>Mã giao dịch</Text>

                    </View>

                    <Text style={{ flex: 1 }} />
                    <View style={{ paddingRight: hScale(5) }}>
                        <Text>{tran_code}</Text>
                        <Text style={{
                            position: 'absolute',
                            right: 5, bottom: 2
                        }}>{created_time}</Text>
                    </View>

                </View>


                {/* -------noi_dung */}
                <View style={{
                    width: '100%',
                    height: vScale(105),
                    borderColor: '#808080,',
                    backgroundColor: '#F1F1F1',
                    borderRadius: 5,
                    justifyContent: 'space-between'
                }}>
                    <View style={{ marginHorizontal: hScale(10), }}>
                        <View style={{ flexDirection: 'row', paddingVertical: vScale(5) }}>
                            <Text style={{fontWeight:'bold'}}>{tran_type_title}</Text>
                            <Text style={{ flex: 1 }} />
                            <Text>{formatMoney(amount)}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: hScale(10) }}>
                        <Text style={{ paddingVertical: vScale(5) }}>Mã đơn: </Text>
                        <Text style={{ paddingVertical: vScale(5), color: 'blue' }}>{tran_detal.order_code}</Text>

                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: hScale(10) }}>
                        <Text style={{ paddingVertical: vScale(5) }}>Nội Dung: </Text>
                        <Text style={{ paddingVertical: vScale(5) }}>{tran_detal.detail}</Text>

                    </View>
                </View>

            </View>
        </ScrollView>

    )
}

