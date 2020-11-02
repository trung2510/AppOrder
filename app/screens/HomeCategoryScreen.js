import React, { useState, useEffect, useMemo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import useFetchData from '../hooks/useFetchDataCate'
import { images } from '../assets/images';
import { vScale, hScale } from '../commons/PerfectPixel';
import RowItemCategory from '../components/RowItemCategory';
import { CheckBox, Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';

import MyDialogNoInput from '../components/MyDialogNoInput';
import formatMoney from '../commons/async/FormatMoney'
import LoadingCom from '../components/LoadingCom';
import SimpleToast from 'react-native-simple-toast';


export default function HomeCategoryScreen({ navigation, route }) {
  const data_user = route.params.data_user;
  const user_id = '1cadcee'
  const { isLoading, isError, arrListCategory, page, totalPage, totalD, setPage, setArrListCategory, setTotalD } = useFetchData({user_id});
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  let index = 0
  let total = 0
  let totalPr = 0
  const onEndReached = () => {
    if (page < totalPage) {
      setPage(page + 1)
    } else {
      console.log('else page + 1');
      setPage(page)
    }
  };

  const getTotalSp = (itemQt, check, price) => {
    if (arrListCategory.length > 0) {
      for (index; index < arrListCategory.length; index++) {
        total += arrListCategory[index].order.order_quantity
        totalPr += arrListCategory[index].order.total_amount
      }
      setTotalQuantity(total)
      setTotalPrice(formatMoney(totalPr))
    }
    if (check == true) {
      total -= itemQt
      totalPr -= price

    } else if (check == false) {
      total = total + itemQt
      totalPr = totalPr + price
    }
    setTotalQuantity(total)
    setTotalPrice(formatMoney(totalPr))
  }
  // chi chay khi arrList thay doi
  useMemo(() => getTotalSp(), [arrListCategory])

  //xoa local
  const changeArr = (order_id) => {
    console.log('orderId', order_id);
    if (order_id) {
      setArrListCategory(arrListCategory.filter(function (item) { return item.order.id !== order_id }))
    }
  }

  const changeTotalD = (checked) => {
    if (checked == true) {
      setTotalD(totalD - 1)
    } else {
      setTotalD(totalD + 1)
    }
  }

  const [checkedTotalItem, setCheckedTotalItem] = useState(true);
  const [dialogNoInputVisible, setDialogNoInputVisible] = useState(false);

  const handleCancel = () => {
    setDialogNoInputVisible(false);
  };
  const handleRecharge = () => {
    setDialogNoInputVisible(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F2F1F1', flex: 1 }}>
      {/* --------------------------------------------------------------------------------------------------------------Header */}
      <HeaderComponent title="Chờ đặt cọc" navigation={navigation} />
      <LoadingCom visible={isLoading} />
      {/* --------------------------------------------------------------------------------------------------------------item địa chỉ */}
      <View
        style={{
          alignItems: 'center',
          height: vScale(680),
        }}>
        <View style={styles.item_address}>
          <Text style={styles.name_sdt}>Dương Quá 01 - 0909654321</Text>
          <Text style={styles.address}>
            sn 90, ngõ 16, đường Trần Phú, Quận Ba Đình, Hà Nội
          </Text>
          <Text style={styles.note}>liên hệ trước khi giao</Text>
        </View>

        {isError && <Text>Xảy ra lỗi, vui lòng thử lại ...</Text>}
        {arrListCategory.length > 0 ? (
          <FlatList
            data={arrListCategory}
            renderItem={({ item }) => (
              <RowItemCategory
                data_user={data_user}
                item={item}
                navigation={navigation}
                checkedTotalItem={checkedTotalItem}
                callbackChecked={changeTotalD} //checked
                callbackArr={changeArr} //xoa local
                callbackTotalSp={getTotalSp} //thay doi so luong sp
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0}
            onEndReached={() => onEndReached()}
          />
        ) : (
            <Text>Không có dữ liệu</Text>
          )}
      </View>

      <View
        style={styles.view_footer}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: hScale(15) }}>
          <Text>
            Số dư: {data_user ? data_user.user.account_balance : 'err'}đ
          </Text>
          <Text style={{ flex: 1 }} />
          <Text>{totalD} Đơn/{totalQuantity}SP</Text>
        </View>

        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: hScale(10), }}>
          <CheckBox
            containerStyle={{ marginLeft: 0, marginRight: 0 }}
            checkedIcon={
              <Image source={images.checkbox_checked} style={styles.checkbox} />
            }
            uncheckedIcon={
              <Image
                source={images.checkbox_unchecked}
                style={styles.checkbox}
              />
            }
            checked={checkedTotalItem}
            onPress={async () => {
              await setCheckedTotalItem(!checkedTotalItem)
              if (checkedTotalItem == false) {
                getTotalSp(), setTotalD(arrListCategory.length)
              } else {
                setTotalPrice(0), setTotalQuantity(0), setTotalD(0)
              }

            }}
          />

          <Text style={{ marginBottom: vScale(5) }}>Tất cả: {totalPrice}đ</Text>
          <Text style={{ flex: 1 }} />
          <Button
            buttonStyle={styles.btn}
            titleStyle={{ fontSize: 13 }}
            title="Đặt cọc"
            onPress={() => {
              setDialogNoInputVisible(!dialogNoInputVisible);
            }}
          />

          {dialogNoInputVisible ? (
            <MyDialogNoInput
              title="Đặt cọc đơn hàng"
              dialogVisible={dialogNoInputVisible}
              handleCancel={handleCancel}
              handleDelete={handleRecharge}
              note="Số tiền đặt cọc không đủ"
              rightButton="OK"
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item_address: {
    width: hScale(445),
    height: vScale(105),
    marginTop: vScale(5),
    marginHorizontal: hScale(5),
    marginBottom: hScale(10),
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  name_sdt: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: hScale(10),
    paddingTop: vScale(10),
  },
  address: {
    fontStyle: 'italic',
    fontSize: 13,
    paddingTop: vScale(10),
    paddingHorizontal: hScale(10),
  },
  note: {
    fontSize: 13,
    paddingTop: vScale(10),
    paddingHorizontal: hScale(10),
  },
  checkbox: {
    width: hScale(20),
    height: vScale(20),
  },
  btn: {
    backgroundColor: '#fd2950',
    width: hScale(95),
    height: vScale(35),
    marginRight: hScale(5),
    marginBottom: vScale(8),
  },
  view_footer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute', bottom: 0,
    backgroundColor: '#FFE1FF',
    width: '100%',
    height: vScale(70),
  }
});
