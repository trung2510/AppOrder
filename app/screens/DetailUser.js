import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

import { vScale, hScale } from '../commons/PerfectPixel';

import { images } from '../assets/images';
import { inputStyle } from '../styles/input';
import { btnStyle } from '../styles/btn';

import Header from '../components/Header';

import { Input } from 'react-native-elements';

export default function DetailUser({ navigation }) {
  const data = [['Nữ', 'Nam']];

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState('');

  const onChange = (event, selectedDate) => {
    let datepick = selectedDate.getDate().toString();
    let monthpick = selectedDate.getMonth() + 1;
    let yearpick = selectedDate.getFullYear().toString();

    setDateOfBirth(`${datepick} / ${monthpick} / ${yearpick}`);

    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  _onChangePass = () => {
    navigation.navigate('ChangePass');
  };

  const [valueGt, setValueGt] = useState('Giới tính');

  return (
    <MenuProvider >
      <View style={styles.container}>
        <Header title="Thông tin cá nhân" navigation={navigation} />

        <ScrollView>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={images.iconUser1} style={styles.logo} />
          </View>

          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>
                Họ và tên (<Text style={{ color: 'red' }}>*</Text>)
                </Text>
            </View>
            <View style={styles.viewInput}>
              <Input
                inputStyle={inputStyle.inputStyle}
                inputContainerStyle={styles.input}
              />
            </View>
          </View>
          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>
                Số điện thoại(<Text style={{ color: 'red' }}>*</Text>)
                </Text>
            </View>
            <View style={styles.viewInput}>
              <Input
                inputStyle={inputStyle.inputStyle}
                inputContainerStyle={styles.input}
              />
            </View>
          </View>
          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>Mật khẩu</Text>
            </View>
            <View style={styles.viewInput1}>
              <Input
                inputStyle={inputStyle.inputStyle}
                inputContainerStyle={styles.input1}
              />
              <TouchableOpacity onPress={() => _onChangePass()}>
                <Text style={{ color: '#3E74A8' }}>Đổi mật khẩu ?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>Ngày sinh</Text>
            </View>
            <View style={styles.viewInput2}>
              <Input
                value={dateOfBirth}
                inputStyle={inputStyle.inputStyle}
                inputContainerStyle={styles.input2}
              />
              <TouchableOpacity onPress={showDatepicker}>
                <Image
                  source={images.icon_calendar}
                  style={{
                    width: hScale(30),
                    height: vScale(30),
                    marginLeft: hScale(10),
                  }}
                />
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>Giới tính</Text>
            </View>
            <Menu style={{ width: hScale(300), marginLeft: 20 }}>
              <MenuTrigger>
                <Text>{valueGt}</Text>
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => setValueGt('Nam')}>
                  <Text style={{ color: 'red' }}>Nam</Text>
                </MenuOption>
                <MenuOption onSelect={() => setValueGt('Nữ')}>
                  <Text style={{ color: 'red' }}>Nữ</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>
                Địa chỉ (<Text style={{ color: 'red' }}>*</Text>)
                </Text>
            </View>
            <View style={styles.viewInput}>
              <Input
                inputStyle={inputStyle.inputStyle}
                inputContainerStyle={styles.input}
              />
            </View>
          </View>
          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>
                Tỉnh thành (<Text style={{ color: 'red' }}>*</Text>)
                </Text>
            </View>
            <Menu style={{ width: hScale(300), marginLeft: 20 }}>
              <MenuTrigger text="Tỉnh" />
              <MenuOptions>
                <MenuOption>
                  <Text style={{ color: 'red' }}>Hà Nội</Text>
                </MenuOption>
                <MenuOption>
                  <Text style={{ color: 'red' }}>Hà Nam</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.viewContent}>
            <View style={styles.viewText}>
              <Text>Quận huyện </Text>
            </View>
            <Menu style={{ width: hScale(300), marginLeft: 20 }}>
              <MenuTrigger text="Quận huyện" />
              <MenuOptions>
                <MenuOption>
                  <Text style={{ color: 'red' }}>Kim Bảng</Text>
                </MenuOption>
                <MenuOption>
                  <Text style={{ color: 'red' }}>Phủ Lí</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>

          <View style={btnStyle.viewRegister}>
            <TouchableOpacity style={btnStyle.btnLogin}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Cập nhật
                </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  viewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vScale(25),
  },
  viewInput: {
    width: vScale(300),
  },
  viewText: {
    width: hScale(130),
    alignItems: 'flex-start',
    marginLeft: hScale(10),
  },
  logo: {
    width: hScale(100),
    height: vScale(100),
    marginTop: vScale(20),
  },
  input: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    width: hScale(290),
    height: vScale(35),
    marginTop: vScale(5),
  },
  input1: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    width: hScale(170),
    height: vScale(35),
    marginTop: vScale(5),
  },
  input2: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    width: hScale(210),
    height: vScale(35),
    marginTop: vScale(5),
  },
  viewInput1: {
    width: hScale(200),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewInput2: {
    width: hScale(220),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
