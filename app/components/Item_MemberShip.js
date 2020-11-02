import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

import {Card} from 'react-native-paper'
import { hScale, vScale } from '../commons/PerfectPixel'

export default function Item_MemberShip() {
    return(
        <View
        style={{
          width: hScale(435),
          height: vScale(120),
          backgroundColor: 'white',
          marginTop: vScale(20),
          borderRadius: 10,
          justifyContent:'center'
        }}>
          <View style ={{marginLeft:5}}>
        <Text>
          Đơn hàng: <Text style={styles.text}>4E41_41312312</Text>
        </Text>
        <Text>Điểm tích lũy được: <Text style={{color:'red'}}> 12 điểm</Text></Text>
        <Text>Tích lũy từ phí mua hàng 9.8 điểm, Tích lũy từ phí vận chuyển quốc tế 2.4 điểm</Text>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    viewContent: {
      width: hScale(440),
      height: vScale(30),
      // marginTop: vScale(10),
      flexDirection: 'row',
    },
    viewContentLeft: {
      width: hScale(125),
      height: vScale(30),
      backgroundColor: '#3300AA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewContentRight: {
      width: hScale(315),
      height: vScale(30),
      backgroundColor: '#FF99FF',
      alignItems: 'center',
    },
    icon_start: {
      width: hScale(220),
      height: vScale(30),
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    text: {
      color: '#33CCCC',
    },
    textContent: {color: 'white', fontSize: hScale(15)},
  });
  