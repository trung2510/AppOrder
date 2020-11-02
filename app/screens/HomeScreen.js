
import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import { images } from '../assets/images'
import HomeTitleComponent from '../components/HomeTitleComponent'
import HomeHeaderComponent from '../components/HomeHeaderComponent'
import HomeTaobaoComponent from '../components/HomeTaobaoComponent'
import HomeSearchComponent from '../components/HomeSearchComponent'
import { vScale, hScale, radius } from '../commons/PerfectPixel'
import HomeContentComponent from '../components/HomeContentComponent'
import { connect } from 'react-redux'



function HomeScreen({ navigation, data, data_user }) {


    const banner = data.receivedHomeContent ? { uri: data.receivedHomeContent.banner } : images.img_banner

    // console.log(banner, ' bannerrrrrrrrrrrrrrrrrrrrr');

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: '#FFF', }}>

                    <HomeTitleComponent data_user={data_user} />
                    <HomeHeaderComponent navigation={navigation} data_user={data_user} />

                    <View style={{ alignItems: 'center', resizeMode: 'stretch' }}>
                        <Image
                            source={banner}
                            style={styles.banner}
                        />
                    </View>

                    <HomeTaobaoComponent />
                    <HomeSearchComponent navigation={navigation} />
                    <HomeContentComponent navigation={navigation} />

                </View>
            </ScrollView>
        </SafeAreaView>

    )

}


const mapStateToProps = (state) => {
    // console.log('sudungreducers');

    return {
        data: state.fetchContentHomeReducers,
        data_user: state.authReducers,
    }

};


export default connect(mapStateToProps)(HomeScreen)



const styles = StyleSheet.create({
    banner: { width: hScale(430), height: vScale(130), borderRadius: radius },
})
