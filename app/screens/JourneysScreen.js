import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { hScale, vScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
export default function JourneysScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={{ width: '100%' }}>
                <View style={styles.view_progress}>
                    <Image source={images.ic_checkpoin} />
                    <View style={styles.view_txt_first}>
                        <Text style={styles.txt_bold}>TẠO ĐƠN</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>THANH TOÁN</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>ĐANG MUA HÀNG</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>NGƯỜI BÁN GIAO</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>KHO TQ NHẬN HÀNG</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>KIỂM HÀNG</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>CHỜ GIAO</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>


                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>ĐANG GIAO</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress}>
                    <Image style={styles.img_check} source={images.ic_checkpoin} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>NHẬN HÀNG</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

                <View style={styles.view_progress_last}>
                    <Image style={styles.img_check} source={images.ic_checkpoinEND} />
                    <View style={styles.view_txt}>
                        <Text style={styles.txt_bold}>HẾT HÀNG/HỦY HÀNG</Text>
                        <Text>Ngày/Tháng/Năm</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    view_txt: {
        width: hScale(300),
        justifyContent: 'flex-start',
        left: hScale(10),
        marginTop: vScale(-10)
    },
    txt_bold: {
        fontSize: hScale(18),
        fontWeight: 'bold',
        marginBottom: vScale(10)
    },
    img_check: {
        marginTop: vScale(-10)
    },
    view_txt_first: {
        width: hScale(300),
        justifyContent: 'flex-start',
        left: hScale(10),
    },
    view_progress: {
        flexDirection: 'row'
    },
    view_progress_last: {
        flexDirection: 'row',
        marginBottom: vScale(50)
    }
})