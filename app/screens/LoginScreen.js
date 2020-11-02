import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

import { vScale, hScale } from '../commons/PerfectPixel';

import { images } from '../assets/images';
import { inputStyle } from '../styles/input';
import { styleIcons } from '../styles/icons';
import { btnStyle } from '../styles/btn';
import { headerStyle } from '../styles/header';

import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

import { loginAction } from '../redux/actions/AuthActions';

function LoginScreen({ navigation, login, data }) {
  const [focusUsername, setFocusUsername] = useState('');
  const [focusPass, setFocusPass] = useState('');

  const [valueUser, setValueUser] = useState('');
  const [valuePass, setValuePass] = useState('');



  const _onRegister = () => {
    navigation.navigate('Register');
  };
  const _onLoginPress = () => {
    console.log('login', data.message);
    if (data.success == true) {
      Alert.alert('Dang nhap thanh cong');
      navigation.navigate('Nav');
    }
    const user = {
      credential: 'trung2510',
      password: 'trung2510',
      order_site: 'orderqc',
    };

    login(user);
  };

  return (
    <View style={styles.container}>
      <View style={headerStyle.header}>
        <Text style={headerStyle.title}>ĐĂNG NHẬP</Text>
      </View>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={images.logo} style={styles.logo} />

          <View style={styles.inputLogin}>
            <Input
              value={valueUser}
              onChangeText={value => setValueUser(value)}
              onFocus={() => setFocusUsername('#fd2950')}
              onBlur={() => setFocusUsername('#DCDCDC')}
              inputContainerStyle={{
                borderBottomColor: focusUsername,
                height: vScale(30),
                marginTop: vScale(45),
              }}
              inputStyle={inputStyle.inputStyle}
              placeholder="Tên đăng nhập"
              leftIcon={
                <Image source={images.iconUser} style={styleIcons.iconLogin} />
              }
              rightIcon={
                <TouchableOpacity onPress={() => setValueUser('')}>
                  <Image
                    source={images.icon_delete}
                    style={styleIcons.iconLogin}
                  />
                </TouchableOpacity>
              }
            />
            <Input
              value={valuePass}
              onChangeText={value => setValuePass(value)}
              onFocus={() => setFocusPass('#fd2950')}
              onBlur={() => setFocusPass('#DCDCDC')}
              inputContainerStyle={{
                borderBottomColor: focusPass,
                height: vScale(30),
                marginTop: vScale(45),
              }}
              inputStyle={inputStyle.inputStyle}
              placeholder="Mật Khẩu"
              leftIcon={
                <Image source={images.iconsPass} style={styleIcons.iconLogin} />
              }
              rightIcon={<Text style={{ color: '#fd2950' }}>Quên!</Text>}
            />
          </View>

          <View style={btnStyle.viewLogin}>
            <TouchableOpacity
              onPress={() => _onLoginPress()}
              style={btnStyle.btnLogin}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                ĐĂNG NHẬP
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => _onRegister()}>
            <Text
              style={{
                color: 'black',
                marginTop: vScale(40),
                textDecorationLine: 'underline',
              }}>
              Bạn chưa có tài khoản ?
            </Text>
          </TouchableOpacity>
          <View style={{ marginTop: vScale(100) }}>
            <Text>Copyright By Orderqc.com</Text>
          </View>
        </View>
        <View style={{ height: vScale(100) }} />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    data: state.authReducers,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(loginAction(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: hScale(420),
    height: vScale(160),
    marginTop: vScale(30),
    resizeMode: 'stretch',
  },
  inputLogin: {
    width: '100%',
    marginTop: vScale(20),
  },
});
