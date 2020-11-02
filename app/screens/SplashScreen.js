import React from 'react'
import { SafeAreaView, Image, StyleSheet, StatusBar, View } from 'react-native'
import {images} from '../assets/images'
import { hScale, vScale } from '../commons/PerfectPixel'
export default function SplashScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fd2950" />
            <Image style={styles.imglogo} source={images.logo} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    imglogo: {
        width: hScale(405),
        height: vScale(135),
        resizeMode: 'contain',
        top: vScale(160)
    }
})