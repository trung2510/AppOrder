import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Input } from 'react-native-elements';
import { hScale, vScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';



export default function View_Search() {
    const [Open_advenced, setOpen_advenced] = useState(false)
    const [openDate, setOpenDate] = useState(false)
    const [DateFrom, setDateFrom] = useState('Từ ngày')
    const [DateTo, setDateTo] = useState('Đến ngày')
    const [date, setDate] = useState(new Date());
    const [When, setWhen] = useState(null);

    const [City, setCity] = useState('Chọn trạng thái')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate
        setOpenDate(Platform.OS === 'ios');
        var datepick = selectedDate.getDate().toString();
        var monthpick = (selectedDate.getMonth() + 1).toString();
        var yearpick = selectedDate.getFullYear().toString();
        var fulldate = `${datepick}/${monthpick}/${yearpick}`;
        if (When === 'From') {
            setDateFrom(fulldate)
        }
        else if (When === 'To') {
            setDateTo(fulldate)
        }
    };

    return (
        <MenuProvider style={{ alignItems: 'center' }}>
            <Input placeholder="Mã đơn hàng, tên shop..."
                containerStyle={styles.ipsearch}
                selectionColor='red'
                inputContainerStyle={{ borderBottomWidth: 0, height: vScale(42), marginTop: 0 }}
                rightIcon={<TouchableOpacity><Image style={styles.rightIcon} source={images.ic_search} /></TouchableOpacity>}
                rightIconContainerStyle={styles.righticon}
                textAlignVertical='center'
            />
            {
                openDate ?
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        is24Hour={true}
                        display="default"
                        value={date}
                        onChange={onChange}
                    /> :
                    null
            }
            {Open_advenced
                ?
                <View>
                    <View style={styles.viewcalenda}>
                        <Button
                            buttonStyle={styles.viewday}
                            title={DateFrom}
                            titleStyle={DateFrom === 'Từ ngày' ? styles.txt_day : styles.txt_day_bold}
                            onPress={() => {
                                setOpenDate(!openDate),
                                    setWhen('From')
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setOpenDate(!openDate),
                                setWhen('From')
                            }}
                        >
                            <Image source={images.ic_calenda} style={styles.ic_calenda_1} />
                        </TouchableOpacity>



                        <Button buttonStyle={styles.viewday}
                            title={DateTo}
                            titleStyle={DateTo === 'Đến ngày' ? styles.txt_day : styles.txt_day_bold}
                            onPress={() => {
                                setOpenDate(!openDate)
                                setWhen('To')
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setOpenDate(!openDate),
                                setWhen('To')
                            }}
                        >
                            <Image source={images.ic_calenda} style={styles.ic_calenda_2} />
                        </TouchableOpacity>
                    </View>
                    <Menu style={styles.input_container}>
                        <MenuTrigger
                            customStyles={{
                                triggerOuterWrapper: styles.trigger_wrapper,
                                triggerText: City === 'Chọn trạng thái' ? styles.trigger_text : styles.trigger_text_choose,
                                triggerWrapper: styles.trigger_wrap
                            }}

                            text={City}
                        />
                        <MenuOptions optionsContainerStyle={{ height: 500, position: 'relative' }}>
                            <MenuOption onSelect={() => setCity('Cầu Giấy')} text='Cầu Giấy' />
                            <MenuOption onSelect={() => setCity(`Mỹ Đình`)} text='Mỹ Đình' />
                        </MenuOptions>
                    </Menu>
                </View>
                :
                null
            }
            <View style={styles.view_search}>
                <TouchableOpacity style={styles.touch_search}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Tìm kiếm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                setOpen_advenced(!Open_advenced), setDateFrom('Từ ngày');
                    setDateTo('Đến ngày');
                    setCity('Chọn trạng thái')
                }} style={styles.advanced_search}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{Open_advenced ? 'Đóng nâng cao' : 'Nâng cao'}</Text>
                </TouchableOpacity>
            </View>
        </MenuProvider>
    )

}


const styles = StyleSheet.create({
    ipsearch: {
        borderColor: '#dedfdf',
        borderWidth: 3,
        marginTop: vScale(10),
        borderRadius: hScale(50),
        height: vScale(45),
        width: hScale(440),
        backgroundColor: '#ffffff'
    },
    rightIcon: {
        width: hScale(22),
        height: vScale(22),
        resizeMode: 'contain'
    },
    viewcalenda: {
        flexDirection: 'row',
        marginTop: vScale(10),
        alignItems: 'center'
    },
    ic_calenda_1: {
        width: hScale(28),
        height: vScale(26),
        marginLeft: hScale(5),
        marginRight: hScale(20)
    },
    ic_calenda_2: {
        width: hScale(28),
        height: vScale(26),
        marginLeft: hScale(5)
    },
    viewday: {
        width: hScale(175),
        height: vScale(45),
        borderWidth: 2,
        borderColor: '#cdcdcd',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: hScale(5),
        backgroundColor: '#ffffff'
    },
    txt_day: {
        textAlign: 'center',
        color: '#cdcdcd',
        fontSize: hScale(20),
    },
    txt_day_bold: {
        textAlign: 'center',
        color: 'black',
        fontSize: hScale(20),
        fontWeight: 'bold'
    },
    view_status: {
        width: hScale(440),
        height: vScale(45),
        borderWidth: 2,
        borderColor: '#cdcdcd',
        marginTop: vScale(10),
        borderRadius: hScale(5),
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    img_dow: {
        width: hScale(15),
        height: vScale(10),
        position: 'absolute',
        alignSelf: 'flex-end',
        right: hScale(15)
    },
    view_search: {
        flexDirection: 'row',
        marginTop: vScale(10)
    },
    touch_search: {
        width: hScale(215),
        height: vScale(48),
        backgroundColor: '#fd2950',
        marginRight: hScale(12),
        justifyContent: 'center'
    },
    advanced_search: {
        width: hScale(215),
        height: vScale(48),
        borderWidth: 2,
        borderColor: '#cdcdcd',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    input_container: {
        borderWidth: 1,
        borderColor: '#cdcdcd',
        backgroundColor: 'white',
        borderRadius: hScale(8),
        height: vScale(45),
        marginTop: vScale(10),
    },
    trigger_wrapper: {
        height: vScale(45),
        width: '100%',
    },
    trigger_text: {
        color: '#cdcdcd',
        marginLeft: hScale(15),
        height: '100%',
        fontSize: vScale(20),
        marginTop: vScale(7),
    },
    trigger_wrap: {
        height: vScale(45),
        alignItems: 'center'
    },
    trigger_text_choose: {
        marginLeft: hScale(15),
        height: '100%',
        fontSize: vScale(20),
        marginTop: vScale(7)
    },
})