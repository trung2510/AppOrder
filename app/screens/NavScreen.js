import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { images } from '../assets/images';
import { vScale, hScale } from '../commons/PerfectPixel';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen'
import CartScreen from './CartScreen'
import OrderScreen from './OrderScreen'
import AccountScreen from './AccountScreen'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarPosition='bottom'
      initialRouteName="Home"
      tabBarOptions={{
        labelStyle: { fontSize: 13 },
        style: { backgroundColor: '#fff' },
        showIcon: true,
        activeTintColor: '#FF0000',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <View style={styles.view}>
                <Image source={images.icon_home_page1}
                  style={styles.img_nor} />
              </View>
              : <View style={styles.view}>
                <Image source={images.icon_home_page2}
                  style={styles.img_select} />
              </View>
          ),
          tabBarLabel: ({ focused }) => (
            focused
              ? <Text style={styles.text_select}>Trang chủ</Text>
              : <Text style={styles.text_nor}>Trang chủ</Text>
          ),
        }}

      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <View style={styles.view}>
                <Image source={images.icon_notification1}
                  style={styles.img_nor} />
              </View>

              : <View style={styles.view}>
                <Image
                  source={images.icon_notification2}
                  style={styles.img_select} />
              </View>
          ),
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={styles.text_select} >Thông báo</Text>
              : <Text style={styles.text_nor}>Thông báo</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <View style={styles.view}>
                <Image
                  source={images.icon_cart1}
                  style={styles.img_nor} />
              </View>

              : <View style={styles.view}>
                <Image
                  source={images.icon_cart2}
                  style={styles.img_select} />
              </View>
          ),
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={styles.text_select} >Giỏ hàng</Text>
              : <Text style={styles.text_nor}>Giỏ hàng</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Bill"
        component={OrderScreen}
        options={{
          
          tabBarIcon: ({ focused }) => (
            focused
              ? 
              <View style={styles.view}>
                <Image
                  source={images.icon_bill1}
                  style={styles.img_nor} />
              </View>
              

              : <View style={styles.view}>
                <Image
                  source={images.icon_bill2}
                  style={styles.img_select} />
              </View>
          ),
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={styles.text_select} >Đơn hàng</Text>
              : <Text style={styles.text_nor}>Đơn hàng</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <View style={styles.view}>
                <Image
                  source={images.icon_accout1}
                  style={styles.img_nor} />
                </View>

              : <View style={styles.view}>
                <Image
                  source={images.icon_accout2}
                  style={styles.img_select} />
              </View>
          ),
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={styles.text_select}>Tài khoản</Text>
              : <Text style={styles.text_nor}>Tài khoản</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function NavScreen() {
  return <MyTabs />
}

const styles = StyleSheet.create({
  img_nor: {
    tintColor: '#FF0000',
    width: hScale(25),
    height: vScale(22),
    resizeMode: 'stretch'
  },

  img_select: {
    tintColor: '#000',
    width: hScale(20),
    height: vScale(20),
    resizeMode: 'stretch'
  },

  view: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  text_nor: {
    fontSize: 10,
    marginVertical: hScale(2)
  },
  
  text_select: {
    color: '#FF0000',
    fontSize: 10,
    marginVertical: hScale(2)
  }
})

// const mapStateToProp = (state) => {
//   dataOrder : state.authReducers
// }
// const mapDispatchToProp = (dispatch) => {
//   getorder : dispatch(getListOrderAction())
// }
// export default connect(mapStateToProp,mapDispatchToProp)(NavScreen)
