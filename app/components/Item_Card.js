import React, { Component } from 'react'

import {View, Text, Image, StyleSheet} from 'react-native'
import {images} from '../assets/images';
import {Card} from 'react-native-paper';
import {vScale, hScale} from '../commons/PerfectPixel';




export default function Item_Card({title}) {
    return(
        <Card style={styles.cards}>
        <Card.Actions>
          <Text>{title}</Text>
          <View
            style={styles.viewCard}>
            <Image
              source={images.icon_detail}
              style={styles.iconCard}
            />
          </View>
          <View
            style={styles.viewCard}>
            <Image
              source={images.icon_detail}
              style={styles.iconCard}
            />
          </View>
        </Card.Actions>
      </Card>
    )
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
    iconCard : {
      width: hScale(10), height: vScale(16)
    }
  });
  