import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import { images } from '../assets/images'
import { vScale, hScale } from '../commons/PerfectPixel'
import { connect } from 'react-redux'
import { filter1688Action, filterTaoBaoAction, filterTmallAction } from '../redux/actions/HomeActions'


function HomeTaobaoComponent({ onfilter1688, onfilterTaobao, onfilterTmall }) {

    const [textTaobao, setTextTaobao] = useState(true)
    const [textTmall, setTextTmall] = useState(false)
    const [text1688, setText1688] = useState(false)
    const onChangeStyle = (textStyle) => {
        if (textStyle == true) return styles.text_change
        else if (textStyle == true) return styles.text_change
        else if (textStyle == true) return styles.text_change
        else return styles.text
    }
    const onChangeImgStyle = (textStyle) => {
        if (textStyle == true) return styles.img_change
        else if (textStyle == true) return styles.img_change
        else if (textStyle == true) return styles.img_change
        else return styles.img
    }
    return (

        <View style={styles.view}>



            <TouchableOpacity style={styles.tou} onPress={() => { onfilterTaobao(), setTextTaobao(true), setTextTmall(false), setText1688(false) }}>
                <Image
                    source={images.img_taobao}
                    style={onChangeImgStyle(textTaobao)}
                />
                <Text style={onChangeStyle(textTaobao)}>Taobao</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tou} onPress={() => { onfilterTmall(), setTextTaobao(false), setTextTmall(true), setText1688(false) }}>
                <Image
                    source={images.img_tmall}
                    style={onChangeImgStyle(textTmall)}
                />
                <Text style={onChangeStyle(textTmall)}>Tmall</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tou} onPress={() => { onfilter1688(), setTextTaobao(false), setTextTmall(false), setText1688(true) }}>
                <Image
                    source={images.img_sixteen}
                    style={onChangeImgStyle(text1688)}
                />
                <Text style={onChangeStyle(text1688)}>1688</Text>
            </TouchableOpacity>

        </View>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        onfilter1688: () => {
            dispatch(filter1688Action());
        },
        onfilterTmall: () => {
            dispatch(filterTmallAction());
        },
        onfilterTaobao: () => {
            dispatch(filterTaoBaoAction());
        },
    }
}


export default connect(null, mapDispatchToProps)(HomeTaobaoComponent)

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: hScale(20),
        marginVertical: vScale(10)
    },
    tou: {
        alignItems: 'center',
    },
    text: {
        color: 'black'
    },
    text_change: {
        color: 'red',
        fontWeight: 'bold'
    },
    img: {
        width: hScale(50),
        height: vScale(50),
        resizeMode: 'stretch',
    },
    img_change: {
        width: hScale(55),
        height: vScale(55),
        resizeMode: 'stretch',
    }
})

