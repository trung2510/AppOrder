import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {Card} from 'react-native-paper';

import {vScale, hScale} from '../commons/PerfectPixel';

import Header from '../components/Header';

import {images} from '../assets/images';
import Item_MemberShip from '../components/Item_MemberShip';

export default function MembershipLevelScreen({navigation}) {
  const a = '< 10 ';

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Header navigation={navigation} title="Cấp độ thành viên" />
      <Card style={{height: vScale(210)}}>
        <Card.Actions>
          <View style={styles.viewContent}>
            <View style={styles.viewContentLeft}>
              <Text style={styles.textContent}>Khách lẻ</Text>
            </View>
            <View style={styles.viewContentRight}>
              <View style={styles.icon_start}>
                <Image
                  style={{width: hScale(25), height: vScale(25)}}
                  source={images.icon_start}
                />
                <Image
                  style={{width: hScale(25), height: vScale(25)}}
                  source={images.icon_start}
                />

                <Image
                  style={{width: hScale(25), height: vScale(25)}}
                  source={images.icon_start}
                />

                <Image
                  style={{width: hScale(25), height: vScale(25)}}
                  source={images.icon_start}
                />

                <Image
                  style={{width: hScale(25), height: vScale(25)}}
                  source={images.icon_start}
                />
              </View>
            </View>
          </View>
        </Card.Actions>
        <Card.Actions>
          <View style={styles.viewContent}>
            <View
              style={{
                width: hScale(125),
                height: vScale(30),
                backgroundColor: '#f62d51',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.textContent}>Điểm tích lũy</Text>
            </View>
            <View
              style={{
                width: hScale(315),
                height: vScale(30),
                backgroundColor: '#dfd128',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: hScale(315),
                  height: vScale(30),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: hScale(160),
                    alignItems: 'flex-start',
                  }}>
                  <Text style={{marginLeft: hScale(10), color: 'white'}}>
                    -493.513
                  </Text>
                </View>

                <View
                  style={{
                    width: hScale(160),
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{marginRight: hScale(10), color: 'white'}}>
                    0
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View />
        </Card.Actions>
        <Card.Actions>
          <View>
            <Text>
              Phí dịch vụ:{' '}
              <Text style={styles.text}>
                Đơn > 10 tệ: 2 tệ/đơn Đơn {a}tệ: 1tệ/đơn
              </Text>
            </Text>

            <Text style={{marginTop: vScale(5)}}>
              Giảm Phí vận chuyển thường Quốc tế:{' '}
              <Text style={styles.text}> 0 ->500</Text>
            </Text>
            <Text style={{marginTop: vScale(5)}}>
              Giảm Phí vận chuyển nhanh Quốc tế:{' '}
              <Text style={styles.text}> 0 ->500</Text>
            </Text>
          </View>
        </Card.Actions>
      </Card>
      <Item_MemberShip />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContent: {
    width: hScale(440),
    height: vScale(30),
    flexDirection: 'row',
  },
  viewContentLeft: {
    width: hScale(125),
    height: vScale(30),
    backgroundColor: '#832db6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContentRight: {
    width: hScale(315),
    height: vScale(30),
    backgroundColor: '#f8b6c0',
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
    color: '#457696',
  },
  textContent: {color: 'white', fontSize: hScale(15)},
});
