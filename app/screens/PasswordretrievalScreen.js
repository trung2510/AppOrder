import React, { useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { images } from '../assets/images'
import { hScale, vScale } from '../commons/PerfectPixel'
import { headerStyle } from '../styles/header'
import { Input } from 'react-native-elements'
import { inputStyle } from '../styles/input';
import { styleIcons } from '../styles/icons';
import { btnStyle } from '../styles/btn';


export default function PasswordretrievalScreen({ navigation }) {
    _goLogin =() => {
        navigation.navigate('Login')
    }
    const [focusUsername, setFocusUsername] = useState('');
    const [focusPhone, setFocusPhone] = useState('');
    return (
        <SafeAreaView >
            <View style={styles.container}  >
                <View style={headerStyle.header}>
                    <Text style={headerStyle.title}>Lấy lại mật khẩu</Text>
                </View>
                <View
                    style={styles.iconback}>
                    <TouchableOpacity onPress={()=>_goLogin()}>
                        <Image
                            source={images.ic_back}
                            style={{
                                marginLeft: hScale(15),
                                width: hScale(35),
                                height: vScale(25),
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.imglogo} source={images.logo} />
            <View style={styles.inputForgetPass}>
                <Input
                    onFocus={() => setFocusUsername('red')}
                    onBlur={() => setFocusUsername('#DCDCDC')}
                    inputContainerStyle={{
                        borderBottomColor: focusUsername,
                        height: vScale(30),
                        marginTop: vScale(45),
                    }}
                    inputStyle={inputStyle.inputStyle}
                    placeholder="Tài khoản"
                    leftIcon={
                        <Image source={images.iconUser} style={styleIcons.iconLogin} />
                    }
                />

                <Input
                    onFocus={() => setFocusPhone('#fd2950')}
                    onBlur={() => setFocusPhone('#DCDCDC')}
                    inputContainerStyle={{
                        borderBottomColor: focusPhone,
                        height: vScale(30),
                        marginTop: vScale(45),
                    }}
                    inputStyle={inputStyle.inputStyle}
                    placeholder="Số điện thoại"
                    leftIcon={
                        <Image source={images.iconsPass} style={styleIcons.iconLogin} />
                    }
                />
            </View>

            <View style={styles.viewForget}>
                <TouchableOpacity
                    style={btnStyle.btnLogin}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>LẤY LẠI MẬT KHẨU</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    iconhome: {
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-end'
    },
    iconback: {
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-start'
    },
    imglogo: {
        width: hScale(405),
        height: vScale(140),
        resizeMode: 'contain',
        top: vScale(67),
        alignSelf:'center'
    },
    inputForgetPass: {
        marginTop: vScale(100)
    },
    viewForget: {
        height: vScale(55),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vScale(130),
    }
})
