import React, { useEffect, } from 'react'
import { Text, View, StyleSheet, Image, FlatList, } from 'react-native'
import { vScale, hScale, radius } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import RowItemFashion from './RowItemFashion'

import { connect } from 'react-redux'
import { fetchContentHomeAction } from '../redux/actions/HomeActions'


function HomeContentComponent({ data, onFetchContentHome, navigation,data_user }) {

    
    // const user_id_api = data_user ? data_user.user.user_id : ''

    const user_id = '1cadcee';
    useEffect(() => {
        onFetchContentHome(user_id)
    }, []);
    var title_tt = data.receivedHomeContent ? data.receivedHomeContent.products_category[0].category_title : 'api err';
    var title_dt = data.receivedHomeContent ? data.receivedHomeContent.products_category[1].category_title : 'api err';
    var title_mvb = data.receivedHomeContent ? data.receivedHomeContent.products_category[2].category_title : 'api err';
    var list_tt = data.receivedHomeContent ? data.receivedHomeContent.products_category[0].category_children : null
    var list_dt = data.receivedHomeContent ? data.receivedHomeContent.products_category[1].category_children : null;
    var list_mvb = data.receivedHomeContent ? data.receivedHomeContent.products_category[2].category_children : null;

    return (

        <View>
            <View>
                <View style={styles.view}>
                    <Image
                        source={images.icon_square}
                        style={styles.icon_square}
                    />
                    <Text style={styles.title}>{title_tt}</Text>
                    <Text style={styles.text} />
                    <Image
                        source={images.icon_arrowproduct}
                        style={styles.img_arrow}
                    />


                </View>
                <FlatList
                    data={list_tt}
                    horizontal
                    renderItem={({ item }) => <RowItemFashion navigation={navigation} item={item} />}
                    keyExtractor={item => item.title}
                />

            </View>



            <View>
                <View style={styles.view}>
                    <Image
                        source={images.icon_square}
                        style={styles.icon_square}
                    />
                    <Text style={styles.title}>{title_dt}</Text>
                    <Text style={styles.text} />
                    <Image
                        source={images.icon_arrowproduct}
                        style={styles.img_arrow}
                    />


                </View>
                <FlatList
                    data={list_dt}
                    horizontal
                    renderItem={({ item }) => <RowItemFashion navigation={navigation} item={item} />}
                    keyExtractor={item => item.title}
                />

            </View>



            <View>
                <View style={styles.view}>
                    <Image
                        source={images.icon_square}
                        style={styles.icon_square}
                    />
                    <Text style={styles.title}>{title_mvb}</Text>
                    <Text style={styles.text} />
                    <Image
                        source={images.icon_arrowproduct}
                        style={styles.img_arrow}
                    />


                </View>
                <FlatList
                    data={list_mvb}
                    horizontal
                    renderItem={({ item }) => <RowItemFashion navigation={navigation} item={item} />}
                    keyExtractor={item => item.title}
                />

            </View>
        </View>

    )

}

const mapStateToProps = (state) => {
    // console.log('sudungreducers');

    return {
        data: state.fetchContentHomeReducers,
        data_user : state.authReducers
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchContentHome: (user_id) => {
            dispatch(fetchContentHomeAction(user_id));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContentComponent)



const styles = StyleSheet.create({
    banner: {
        width: hScale(430),
        height: vScale(130),
        borderRadius: radius
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vScale(10)
    },
    text: {
        flex: 1
    },
    img_arrow: {
        marginRight: hScale(10)
    },
    icon_square: {
        width: hScale(25),
        height: vScale(25),
        marginLeft: hScale(15),
        marginRight: hScale(25)
    }
})