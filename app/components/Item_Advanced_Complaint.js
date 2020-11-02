import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import {vScale, hScale} from '../commons/PerfectPixel';

import {Button} from 'react-native-elements';


export default function Item_Advanced_Complaint({onSearchAdvanced, visible, title}) {
  return (
    <View
      style={{
        marginVertical: vScale(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        buttonStyle={styles.btn_search}
        titleStyle={{fontSize: 13}}
        title="Tìm kiếm"
      />
      <Button
        visible={visible}
        buttonStyle={styles.btn_search_advanced}
        titleStyle={{fontSize: 13, color: '#000'}}
        title={title}
        onPress={ () => {onSearchAdvanced()}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    btn_search: {
      backgroundColor: '#fd2950',
      width: hScale(215),
      height: vScale(45),
      marginRight: hScale(12),
    },
    btn_search_advanced: {
      backgroundColor: 'white',
      width: hScale(215),
      height: vScale(45),
    },
    text: {
      width: hScale(175),
      height: vScale(45),
      backgroundColor: '#EEE',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.8,
      borderColor: '#cdcdcd',
    },
    ic_calendar: {
      width: hScale(30),
      height: vScale(30),
      marginHorizontal: hScale(5),
      marginRight: hScale(10),
    },
    input: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      borderRadius: 20,
      width: hScale(445),
      height: vScale(45),
      alignItems: 'center',
      margin: vScale(10),
    },
    viewSearch: {
      height: vScale(45),
      width: hScale(45),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginHorizontal: hScale(10),
    },
  });
  