import React, {useState} from 'react';
import {View, Text,  StyleSheet, TouchableOpacity} from 'react-native';

import {vScale, hScale} from '../commons/PerfectPixel';
import {inputStyle} from '../styles/input';
import {btnStyle} from '../styles/btn';

import {Input} from 'react-native-elements';

import Header from '../components/Header';

export default function ChangePass({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Thông tin cá nhân" navigation={navigation} />
      <Text style={{margin: hScale(20)}}>
        ORDERQC.com khuyên bạn không nên đặt lại mật khẩu quá đơn giản như :
        ngày tháng năm sinh, số điện thoại...
      </Text>
      <View>
        <Text style={styles.lable}>Mật khẩu đang sử dụng</Text>
        <Input
          inputStyle={inputStyle.inputStyle}
          inputContainerStyle={inputStyle.inputStyle_Register}
        />
      </View>
      <View>
        <Text style={styles.lable}>Mật khẩu mới</Text>
        <Input
          inputStyle={inputStyle.inputStyle}
          inputContainerStyle={inputStyle.inputStyle_Register}
        />
      </View>
      <View>
        <Text style={styles.lable}>Nhập lại mật khẩu</Text>
        <Input
          inputStyle={inputStyle.inputStyle}
          inputContainerStyle={inputStyle.inputStyle_Register}
        />
      </View>
      <View style={btnStyle.viewRegister}>
        <TouchableOpacity style={btnStyle.btnLogin}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: vScale(200)}}>
        <Text>Copyright By Orderqc.com</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: hScale(120),
    height: vScale(90),
    marginTop: vScale(20),
    resizeMode: 'stretch',
  },
  lable: {
    fontSize: hScale(15),
    marginLeft: hScale(10),
    marginTop: vScale(20),
  },
});
