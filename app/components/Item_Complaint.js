import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {hScale, vScale} from '../commons/PerfectPixel';
import {images} from '../assets/images';

export default function Item_Complaint() {
  return (
    <TouchableOpacity
      style={{
        width: hScale(450),
        height: vScale(170),
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: hScale(108),
          height: vScale(170),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: hScale(65), height: vScale(50)}}
          source={images.img_no_image}
        />
      </View>

      <View style={{width: hScale(342), height: vScale(170)}}>
        <View
          style={{
            width: hScale(342),
            alignItems: 'flex-end',
            marginTop: vScale(5),
          }}>
          <View
            style={{
              width: hScale(115),
              height: 30,
              backgroundColor: '#d163dc',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hScale(15),
                color: 'white',
                fontWeight: 'bold',
              }}>
              Chờ tiếp nhận
            </Text>
          </View>

          <View />
        </View>
        <View>
          <Text style={styles.text}>Khiếu nại sản phẩm 356499 cho đơn hàng</Text>
          <Text style={{fontWeight:'bold', color:'#3a3d72', fontSize: hScale(15)}}>4e41_6250402</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: hScale(170), alignItems:'flex-start', }}>
            <Text style={styles.text}>Lý do:</Text>
            </View>
            <View style={{width: hScale(170), alignItems:'flex-end', }}>
              <Text style ={styles.text}>Sản phẩm lỗi</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: hScale(170), alignItems:'flex-start', }}>
            <Text style ={styles.text}>Yêu cầu bổi thường:</Text>
            </View>
            <View style={{width: hScale(170), alignItems:'flex-end', }}>
              <Text style ={styles.text}>0<Text style={{textDecorationLine:'underline'}}>đ</Text></Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: hScale(170), alignItems:'flex-start', }}>
            <Text style ={styles.text}>Yêu cầu hệ thống</Text>
            </View>
            <View style={{width: hScale(170), alignItems:'flex-end', }}>
              <Text style ={styles.text}>0<Text style={{textDecorationLine:'underline'}}>đ</Text></Text>
            </View>
          </View>
         
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text:{
    fontWeight:'bold',
    fontSize: hScale(15),
    marginTop: vScale(3)
  }
})