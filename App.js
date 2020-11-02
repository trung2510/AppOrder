
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen'
import HomeScreen from './app/screens/HomeScreen.js'
import RegisterScreen from './app/screens/RegisterScreen'
import CurrentScreen from './app/screens/CurrentScreen'
import PasswordretrievalScreen from './app/screens/PasswordretrievalScreen'
import AddressScreen from './app/screens/AddressScreen'
import Tab_Detailed_InformationScreen from './app/screens/Tab_Detailed_InformationScreen.js'
import NotificationScreen from './app/screens/NotificationScreen'
import Order_ConfirmationScreen from './app/screens/Order_ConfirmationScreen'
import NavScreen from './app/screens/NavScreen'
import HomeCate from './app/screens/HomeCategoryScreen'
import HomeHeaderCom from './app/components/HomeHeaderComponent'
import HomeTransactionScreen from './app/screens/HomeTransactionScreen'
import ChatScreen from './app/screens/ChatScreen'
import WebViewScreen from './app/screens/WebViewScreen'


// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import allReducer from './app/redux/reducers/index';

//redux-saga
import createMiddleware from 'redux-saga';
import rootSaga from './app/redux/sagas/rootSaga'

const sagaMiddleware = createMiddleware();

let store = createStore(allReducer, applyMiddleware(sagaMiddleware));



import AccountScreen from './app/screens/AccountScreen.js';
import DetailUser from './app/screens/DetailUser.js';
import TutorialScreen from './app/screens/TutorialScreen.js';
import MoneyScreen from './app/screens/MoneyScreen.js';
import PricelistScreen from './app/screens/PricelistScreen.js';
import ChangePass from './app/screens/ChangePass.js';
import MembershipLevelScreen from './app/screens/MembershipLevelScreen.js';
import ComplaintListScreen from './app/screens/ComplaintListScreen.js';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CurrentScreen'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CurrentScreen" component={CurrentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordretrievalScreen" component={PasswordretrievalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tab_Detailed_InformationScreen" component={Tab_Detailed_InformationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Order_ConfirmationScreen" component={Order_ConfirmationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Nav" component={NavScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeCate" component={HomeCate} options={{ headerShown: false }} />
        <Stack.Screen name="HomeHeaderCom" component={HomeHeaderCom} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTransactionScreen" component={HomeTransactionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{ headerShown: false }} />


        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tutorial"
          component={TutorialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Money"
          component={MoneyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Price"
          component={PricelistScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePass"
          component={ChangePass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MembershipLevel"
          component={MembershipLevelScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Complaint"
          component={ComplaintListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>

  );
}

sagaMiddleware.run(rootSaga)