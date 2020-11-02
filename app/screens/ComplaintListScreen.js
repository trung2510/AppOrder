import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {images} from '../assets/images';
import {vScale, hScale} from '../commons/PerfectPixel';

import Header from '../components/Header';
import Item_Complaint from '../components/Item_Complaint.js';
import Item_Advanced_Complaint from '../components/Item_Advanced_Complaint.js';

import DateTimePicker from '@react-native-community/datetimepicker';
import DropdownMenu from 'react-native-dropdown-menu';

export default function ComplaintListScreen({navigation}) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('Nâng cao');
  const onSearchAdvanced = () => {
    setDateTo('Từ ngày');
    setDateFrom('Đến ngày');

    setVisible(!visible);
    setTitle('Đóng nâng cao');
    // title="Đóng nâng cao"
  };

  const [dateTo, setDateTo] = useState('Từ ngày');
  const [dateFrom, setDateFrom] = useState('Đến ngày');
  const [dataStatus, setDateStatus] = useState(null);

  const data = [
    [
      'Tất cả khiếu nại',
      'Chờ tiếp nhận',
      'Đang giải quyết',
      'Chấp nhận',
      'Hoàn tiền',
      'Từ chối',
    ],
  ];

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    let datepick = selectedDate.getDate().toString();
    let monthpick = selectedDate.getMonth() + 1;
    let yearpick = selectedDate.getFullYear().toString();

    let fullDate = `${datepick} /${monthpick} / ${yearpick}`;

    if (dataStatus === 'to') {
      setDateTo(fullDate);
    } else {
      setDateFrom(fullDate);
    }
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
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Header title="Danh sách khiếu nại" navigation={navigation} />
      <View style={styles.input}>
        <View
          style={{
            flex: 1,
            marginLeft: 5,
          }}>
          <TextInput placeholder="Mã tên hàng, Tên shop" />
        </View>

        <TouchableOpacity style={styles.viewSearch}>
          <Image
            style={{
              width: hScale(25),
              height: vScale(25),
              marginLeft: hScale(10),
            }}
            source={images.icon_search}
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

      {visible ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                showDatepicker(), setDateStatus('to');
              }}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.text}>
                <Text>{dateTo}</Text>
              </View>

              <Image source={images.icon_calendar} style={styles.ic_calendar} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                showDatepicker(), setDateStatus('from');
              }}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.text}>
                <Text>{dateFrom}</Text>
              </View>

              <Image source={images.icon_calendar} style={styles.ic_calendar} />
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
          <View
            style={{
              height: vScale(100),
              marginVertical: vScale(10),
              width: hScale(400),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DropdownMenu
              bgColor={'white'}
              tintColor={'#666666'}
              activityTintColor={'green'}
              arrowImg={images.icon_down_arrow}
              titleStyle={{color: '#333333'}}
              maxHeight={300}
              data={data}>
              <Item_Advanced_Complaint
                onSearchAdvanced={onSearchAdvanced}
                visible={visible}
                title={title}
              />
              <Item_Complaint />
            </DropdownMenu>
          </View>
        </View>
      ) : (
        <View>
          <Item_Advanced_Complaint
            onSearchAdvanced={onSearchAdvanced}
            visible={visible}
            title={title}
          />

          <Item_Complaint />
        </View>
      )}
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
