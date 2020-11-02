import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {vScale, hScale} from '../commons/PerfectPixel';

import {images} from '../assets/images';
import {inputStyle} from '../styles/input';
import {btnStyle} from '../styles/btn';

import Header from '../components/Header';

import {Input} from 'react-native-elements';

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Đăng kí tài khoản" navigation={navigation} />
      <ScrollView>
        <Image source={images.logo} style={styles.logo} />
        <View
          style={{
            marginTop: vScale(10),
          }}>
          <Text style={styles.lable}>Họ và Tên</Text>
          <Input
            inputStyle={inputStyle.inputStyle}
            inputContainerStyle={inputStyle.inputStyle_Register}
          />
          <Text style={styles.lable}>Tên đăng nhập</Text>
          <Input
            inputStyle={inputStyle.inputStyle}
            inputContainerStyle={inputStyle.inputStyle_Register}
          />
          <Text style={styles.lable}>Mật khẩu đăng nhập</Text>
          <Input
            inputStyle={inputStyle.inputStyle}
            inputContainerStyle={inputStyle.inputStyle_Register}
          />
          <Text style={styles.lable}>Nhập lại mật khẩu</Text>
          <Input
            inputStyle={inputStyle.inputStyle}
            inputContainerStyle={inputStyle.inputStyle_Register}
          />
          <Text style={styles.lable}>Số điện thoại di động</Text>
          <Input
            inputStyle={inputStyle.inputStyle}
            inputContainerStyle={inputStyle.inputStyle_Register}
          />
          <Text style={styles.lable}>Email</Text>
          <Input
            inputStyle={inputStyle.inputStyle}
            inputContainerStyle={inputStyle.inputStyle_Register}
          />
        </View>
        <View style={btnStyle.viewRegister}>
          <TouchableOpacity
            // onPress={() => _handleRegister()}
            style={btnStyle.btnLogin}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: vScale(20),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Copyright By Orderqc.com</Text>
        </View>
        <View style={{height: vScale(80)}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: hScale(420),
    height: vScale(160),
    marginTop: vScale(20),
    resizeMode: 'stretch',
  },
  lable: {
    fontSize: hScale(15),
    marginLeft: hScale(10),
    marginTop: vScale(10),
  },
});
