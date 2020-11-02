import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { images } from '../assets/images'
import { vScale, hScale, } from '../commons/PerfectPixel'
import { connect } from 'react-redux'
import { FILTER_1688, FILTER_TAOBAO, FILTER_TMALL } from '../redux/actions/ActionTypes'
function HomeSearchComponent({ data, navigation }) {

    let filterStatus = data ? data.filterStatus : 'ko co gi'
    const [value, setValue] = useState('')
    const [link, setLink] = useState('')
    const searchLink = () => {

        switch (filterStatus) {
            case FILTER_1688:
                return setLink('https://m.1688.com/offer_search/-6D7033.html?keywords=' + value);
            case FILTER_TMALL:
                return setLink('https://list.tmall.com/search_product.htm?q=' + value)
            case FILTER_TAOBAO:
                return setLink('https://login.taobao.com/')
            default:
                setLink('')
        }

    }

    useEffect(() => {
        searchLink()
    }, [filterStatus]);


    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.icon_search}
                    source={images.icon_search}
                />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
                <TextInput
                    value={value}
                    onChangeText={text => setValue(text)}
                    placeholder="Nhập sản phẩm tìm kiếm" />
            </View>
            <TouchableOpacity
                onPress={() => { navigation.navigate('WebViewScreen', link) }}
                style={styles.tou}>
                <Image
                    style={styles.icon_search1}
                    source={images.icon_search1}
                />
            </TouchableOpacity>

        </View>
    )

}

const mapStateToProps = (state) => {

    return {
        data: state.fetchContentHomeReducers
    }

};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFetchContentHome: (user_id) => {
//             dispatch(fetchContentHomeAction(user_id));
//         },
//     }
// }

export default connect(mapStateToProps)(HomeSearchComponent)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F1F1F4',
        borderRadius: 5,
        width: hScale(340),
        height: vScale(45),
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: hScale(60),
        marginVertical: vScale(15)
    },
    tou: {
        backgroundColor: 'red',
        height: vScale(45),
        width: hScale(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    icon_search1: {
        width: hScale(25),
        height: vScale(25),
    },
    icon_search: {
        width: hScale(25),
        height: vScale(25),
        marginLeft: hScale(10)
    }
})


