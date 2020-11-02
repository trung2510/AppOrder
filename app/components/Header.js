import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {vScale, hScale} from '../commons/PerfectPixel';

import {images} from '../assets/images';
import {headerStyle} from '../styles/header';

export default function Header({navigation, title}) {
  return (
    <View style={headerStyle.header}>
      <Text style={headerStyle.title}>{title}</Text>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity onPress ={() => navigation.navigate('Nav')}>
          <Image
            source={images.iconHome}
            style={{
              marginRight: hScale(15),
              width: hScale(25),
              height: vScale(25),
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          alignItems: 'flex-start',
        }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image
            source={images.icon_back}
            style={{
              marginLeft: hScale(15),
              width: hScale(25),
              height: vScale(25),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
