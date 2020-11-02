import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { images } from '../assets/images'
import { styles_shared } from '../styles/styles'
import { hScale } from '../commons/PerfectPixel'


export default function HeaderComponent({ title, navigation }) {
    return (
        <View style={styles_shared.header}>
            <TouchableOpacity
                style={{
                    width: hScale(50)
                }}
                onPress={() => navigation.pop()}>
                <Image
                    source={images.icon_back}
                    style={styles_shared.ic_back}
                />
            </TouchableOpacity>


            <Text style={styles_shared.text_title}>{title}</Text>

            <TouchableOpacity
                style={{
                    width: hScale(50)
                }}
                onPress={() =>  navigation.navigate('Nav') }>
                 <Image
                source={images.icon_home_white}
                style={styles_shared.ic_home_white}
            />
            </TouchableOpacity>
           
        </View>

    )

}
