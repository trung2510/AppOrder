import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { vScale, hScale } from '../commons/PerfectPixel'
import { connect } from 'react-redux'
import { fetchContentHomeAction } from '../redux/actions/HomeActions'
import { FILTER_TAOBAO, FILTER_TMALL, FILTER_1688 } from '../redux/actions/ActionTypes'
import { images } from '../assets/images'


function RowItemFashion({ item, onFetchContentHome, data, navigation }) {

    var filterStatus = data ? data.filterStatus : 'ko co gi'
    const [link, setLink] = useState(null)
    const [pageTranslate, setPageTranslate] = useState(``)
    const translate1688 =
        `var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 20) {
            clearInterval(interval);
            count = 0;
        } else {
            count = count + 1;
            document.getElementsByClassName('takla-item-text J_SkuBtnText')[0].textContent = 'Chon mau sac kich co';
        }
    }, 200);`

    const translateTaoBao = `
    var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 20) {
            clearInterval(interval);
            count = 0;
        } else {
            count = count + 1;
            var subTitleCount = document.getElementsByClassName('card-subtitle').length;
            if (subTitleCount === 3) {
                document.getElementsByClassName('card-subtitle')[1].innerHTML = 'Chon mau sac kich co';
                document.getElementsByClassName('card-subtitle')[2].innerText = 'THONG TIN CHI TIET SAN PHAM';
            } else {
                document.getElementsByClassName('card-subtitle')[0].innerHTML = 'Chon mau sac kich co';
                document.getElementsByClassName('card-subtitle')[1].innerText = 'THONG TIN CHI TIET SAN PHAM';
            }
        }
    }, 200);`

    const getImage = () => {

        switch (filterStatus) {
            case FILTER_1688:
                return { uri: item.image_1688 }
            case FILTER_TMALL:
                return { uri: item.image_tmall }
            case FILTER_TAOBAO:
                return { uri: item.image_taobao }
            default:
                return images.img_no_image
        }

    }

    const getLink = () => {

        switch (filterStatus) {
            case FILTER_1688:
                return setLink(item.link_1688)
            case FILTER_TMALL:
                return setLink(item.link_tmall)
            case FILTER_TAOBAO:
                return setLink(item.link_taobao)
            default:
                return null
        }

    }

    const getTranslate = () => {
        switch (filterStatus) {
            case FILTER_1688:
                return setPageTranslate(translate1688)
            case FILTER_TMALL:
                return setPageTranslate(translateTaoBao)
            case FILTER_TAOBAO:
                return setPageTranslate(translateTaoBao)
            default:
                return null
        }
    }


    const user_id = '1cadcee';
    useEffect(() => {
        onFetchContentHome(user_id)
    }, []);

    useEffect(() => {
        getLink(),
            getImage(),
            getTranslate()
    }, [filterStatus]);


    return (
        <TouchableOpacity
            style={styles.tou}
            onPress={() => {
                navigation.navigate('WebViewScreen', {
                    link: link,
                    pageTranslate: pageTranslate,
                    title: item.title
                })
            }}
        >
            <Image
                style={styles.img}
                source={getImage({ data })}
            />
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>

    )

}

const mapStateToProps = (state) => {

    return {
        data: state.fetchContentHomeReducers
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchContentHome: (user_id) => {
            dispatch(fetchContentHomeAction(user_id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowItemFashion)


const styles = StyleSheet.create({
    img: {
        marginLeft: hScale(10),
        marginRight: hScale(15),
        width: hScale(140),
        height: vScale(140),
    },
    text: {
        paddingVertical: vScale(20),
        fontSize: 13,
    },
    tou: {
        marginTop: vScale(30),
        alignItems: 'center'
    }
})

