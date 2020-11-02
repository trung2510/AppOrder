import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { images } from '../assets/images'
import { vScale, hScale, radius } from '../commons/PerfectPixel'
import { getChatAction } from '../redux/actions/HomeChatAction'
import RowItemChat from '../components/RowItemChat'

import { connect } from 'react-redux'

function ChatScreen({ navigation, data, onGetChat, route}) {

    const data_chat = data.receivedChat ? data.receivedChat.external_comments : null
    const user_id = '1cadcee'
    const order_id = route.params.order_id  // '150954'
    const order_code = route.params.order_code

    // console.log(order_id,order_code);
    
    useEffect(() => {
        onGetChat(user_id, order_id)
    }, []);


    const [value, setValue] = useState('')

    return (
        <View style={{
            backgroundColor: '#E9E9E9',
            flex: 1,

        }}>
            <HeaderComponent title='Chat trên đơn' navigation={navigation} />

            {/* ===========================view_chat */}
            <View style={{ flex: 9 }}>
                <FlatList

                    data={data_chat}
                    renderItem={({ item }) => <RowItemChat item={item} />}
                    keyExtractor={item => item.time}
                />
            </View>




            {/* ========================input_chat */}
            <View style={{
                flex: 0.8,
                flexDirection: 'row',
                height: vScale(50),
                justifyContent: 'space-around',
                alignItems: 'center'

            }}>
                <TextInput
                    style={{
                        height: vScale(45),
                        width: hScale(380),
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 20,
                        backgroundColor: "#EEE"
                    }}
                    onChangeText={text => setValue(text)}
                    placeholder={'Trao dổi trên đơn hàng ' + order_code}
                    value={value}
                />

                <TouchableOpacity>
                    <Image
                        source={images.icon_send}
                        style={{
                            width: hScale(45),
                            height: vScale(45)
                        }}
                    />
                </TouchableOpacity>

            </View>

        </View>
    )

}
const mapStateToProps = (state) => {
    // console.log('sudungreducers');

    return {
        data: state.getChatReducers,
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        onGetChat: (user_id, order_id) => { dispatch(getChatAction(user_id, order_id)) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)
