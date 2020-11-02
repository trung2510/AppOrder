import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
import { headerStyle } from '../styles/header'
import { images } from '../assets/images'
import InforScreen from './InforScreen.js'
import JourneysScreen from './JourneysScreen'

const Tab = createMaterialTopTabNavigator();
function MyTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Thông tin" component={InforScreen} />
            <Tab.Screen name="Hành trình" component={JourneysScreen} />
        </Tab.Navigator>
    )
}

export default function Detailed_InformationScreen({ navigation }) {
    return (
        <View style={styles.container}  >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.ic_back} source={images.ic_back} />
                </TouchableOpacity>
                <Text style={headerStyle.title}>Chi tiết đơn hàng xxx</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Nav')}>
                    <Image style={styles.icon_home} source={images.iconHome} />
                </TouchableOpacity>
            </View>
            <MyTab/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eeeeee'
    },
    ic_back: {
        width: hScale(24),
        height: vScale(24),
        marginLeft: hScale(10)
    },
    header: {
        height: vScale(80),
        width: '100%',
        backgroundColor: '#fd2950',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon_home: {
        width: hScale(24),
        height: vScale(24),
        marginRight: hScale(10)
    }
})

