import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {vScale, hScale} from '../commons/PerfectPixel';

import {images} from '../assets/images';
import {headerStyle} from '../styles/header';

import {WebView} from 'react-native-webview';

export default function TutorialScreen({navigation}) {
  const renderLoading = () => (
    <ActivityIndicator style={{flex: 1}} color="red" size="large" animating />
  );

  return (
    <View style={styles.container}>
      <View style={headerStyle.header}>
        <Text style={headerStyle.title}>Hướng dẫn</Text>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            alignItems: 'flex-end',
          }}>
          <Image
            source={images.iconHome}
            style={{
              marginRight: hScale(15),
              width: hScale(25),
              height: vScale(25),
            }}
          />
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
      <WebView
        startInLoadingState={true}
        renderLoading={renderLoading}
        source={{uri: 'https://hotro.orderqc.com/huong-dan'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
  },
  logo: {
    width: hScale(420),
    height: vScale(160),
    marginTop: vScale(20),
  },
  lable: {
    fontSize: hScale(15),
    marginLeft: hScale(10),
    marginTop: vScale(10),
  },
});
