import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {vScale, hScale} from '../commons/PerfectPixel';

import {Card} from 'react-native-paper';
import Dialog from 'react-native-dialog';
import Item_Card from '../components/Item_Card'

import {images} from '../assets/images';
import {headerStyle} from '../styles/header';

export default function AccountScreen({navigation}) {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleCancel = () => {
    setDialogVisible(false);
  };
  const handleShowDialog = () => {
    setDialogVisible(true);
  };

  _handleLogout = () => {
    navigation.navigate('Login');
    setDialogVisible(false);
  };
  _onTutorial = () => {
    navigation.navigate('Tutorial');
  };
  _onMoney = () => {
    navigation.navigate('Money');
  };
  _onPrice = () => {
    navigation.navigate('Money');
  };
  _onMemberShipLevel = () => {
    navigation.navigate('MembershipLevel');
  };
  _onComplaintList = () => {
    navigation.navigate('Complaint');
  };

  return (
    <View style={styles.container}>
      <View style={headerStyle.header}>
        <Text style={headerStyle.title}>Thông tin tài khoản</Text>
      </View>
      <TouchableOpacity
        style={styles.user}
        onPress={() => navigation.navigate('Detail')}>
        <Image source={images.iconUser} style={{marginLeft: hScale(20)}} />
        <View style={{flexDirection: 'column', marginLeft: hScale(20)}}>
          <Text style={{fontWeight: 'bold'}}>Nguyễn Cường Anh</Text>
          <View style={{flexDirection: 'row', marginTop: vScale(5)}}>
            <Image
              source={images.icon_start_red}
              style={{width: hScale(23), height: vScale(23)}}
            />
            <Text style={{fontWeight: 'bold', marginLeft: hScale(5)}}>
              Khách lẻ
            </Text>
          </View>
        </View>
        <View
          style={{position: 'absolute', width: '100%', alignItems: 'flex-end'}}>
          <Image
            source={images.icons_send}
            style={{
              marginRight: hScale(15),
              width: hScale(25),
              height: vScale(25),
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.contents}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Item_Card title="Thông tin cá nhân" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _onMemberShipLevel()}>
          <Item_Card title="Cấp độ thành viên" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _onTutorial()}>
          <Item_Card title="Hướng dẫn" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _onComplaintList()}>
          <Item_Card title="Danh sách khiếu nại" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _onMoney()}>
          <Item_Card title="Nạp tiền" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _onPrice()}>
          <Item_Card title="Bảng phí" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Item_Card title="Yêu cầu giao hàng" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleShowDialog()}>
            
          <Item_Card title="Đăng xuất" />

          <Dialog.Container visible={dialogVisible}>
            <Dialog.Title>Đăng xuất</Dialog.Title>
            <Dialog.Description>
              Bạn có chắc chắng muốn đăng xuất không ?
            </Dialog.Description>
            <Dialog.Button label="Hủy" onPress={() => handleCancel()} />
            <Dialog.Button label="Đăng xuất" onPress={() => _handleLogout()} />
          </Dialog.Container>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    width: '100%',
    height: vScale(80),
    backgroundColor: 'white',
    borderRadius: hScale(15),
    marginTop: vScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  contents: {
    width: '100%',
    height: vScale(530),
    backgroundColor: 'white',
    marginTop: vScale(5),
  },
  cards: {
    marginTop: vScale(5),
    height: vScale(55),
  },
  viewCard: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconCard: {
    width: hScale(10),
    height: vScale(16),
  },
});
