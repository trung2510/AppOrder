import React, { useState, useEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, Platform, ActivityIndicator, Modal } from 'react-native'
import { vScale, hScale } from '../commons/PerfectPixel'
import { images } from '../assets/images'
import { Button } from 'react-native-elements'
import TranPriceComponent from '../components/TranPriceComponent'
import RowItemTransaction from '../components/RowItemTransaction'
import HeaderComponent from '../components/HeaderComponent'
import DateTimePicker from '@react-native-community/datetimepicker';
import { MenuProvider } from 'react-native-popup-menu';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { connect } from 'react-redux'
import { fetchTransactionAction } from '../redux/actions/TransactionActions'
import LoadingCom from '../components/LoadingCom'

let arrlist = [];

function HomeTransactionScreen({ navigation, data, onFetchTransaction }) {

    const user_id = '1cadcee'
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('Nâng cao')
    const [txtSearch, setTxtSearch] = useState('')
    const [txtMenu, setTxtMenu] = useState('Chọn trạng thái')
    const [status, setStatus] = useState('')
    const [dateFrom, setDateFrom] = useState('Từ ngày')
    const [dateTo, setDateTo] = useState('Đến ngày')
    const [dateStatus, setDateStatus] = useState(null)
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [arrListTransaction, setArrListTransaction] = useState(null)
    const [defaultPage, setDefaultPage] = useState(1)
    const [visibleLoading, setVisibleLoading] = useState(false);
    const dataType = data.receivedTransaction ? data.receivedTransaction.type : 0
    const data_tran = data.receivedTransaction ? data.receivedTransaction : null
    const tran_type = data_tran ? data_tran.transaction_type_list : null
    const data_list = data.receivedTransaction ? data.receivedTransaction.transaction_list : null
    const [loadData, setLoadData] = useState(false)

    console.log(data_tran);
    
    const params_full_data = {
        user_id: user_id,
        keyword: '',
        transaction_type: '',
        from_time: '',
        to_time: '',
        page: defaultPage
    }

    useEffect(() => {
        const fetchData = async () => {
            await onFetchTransaction(params_full_data)
            if (dataType == 1) {
                console.log('co data roi ne');
                setArrListTransaction(data_list)
            } else {
                console.log('data?');
            }
        }
        fetchData()
        return () => {
            setArrListTransaction(null)
            setDefaultPage(1)
        }
    }, []);


    useEffect(() => {
        if (loadData == true) {
            onFetchTransaction(params_full_data)
            if (data.receivedTransaction) {
                arrlist = arrlist.concat(data.receivedTransaction.transaction_list);
                setArrListTransaction(arrlist);
            }
        }
    }, [defaultPage]);

    const _onSearch = () => {
        let params_search = {}
        if (txtSearch === '' && dateFrom === 'Từ ngày' && dateTo === 'Đến ngày') {
            setVisibleLoading(!visibleLoading)
            console.log('TH1');
            params_search = params_full_data
            onFetchTransaction(params_search)
        }
        else if (dateFrom === 'Từ ngày' || dateTo === 'Đến ngày') {
            params_search = {
                user_id: user_id,
                keyword: txtSearch,
                transaction_type: '',
                from_time: '',
                to_time: '',
            }
            setVisibleLoading(!visibleLoading)
            console.log('TH2');
            onFetchTransaction(params_search)
        }
        else {
            params_search = {
                user_id: user_id,
                keyword: txtSearch,
                transaction_type: status,
                from_time: dateFrom,
                to_time: dateTo,
            }
            setVisibleLoading(!visibleLoading)
            console.log('TH3');
            onFetchTransaction(params_search)
        }
        onFetchTransaction(params_search)
    }

    const onSearchAdvanced = () => {
        setDateFrom('Từ ngày')
        setDateTo('Đến ngày')
        setVisible(!visible);
        { visible ? setTitle('Nâng cao') : setTitle('Đóng nâng cao') }
    }
    const styleFlatlist = visible ? { maxHeight: vScale(300) } : { maxHeight: vScale(390) };

    const onEndReached = () => {
        setLoadData(true)
        if (defaultPage < data.receivedTransaction.total_page) return setDefaultPage(defaultPage + 1)
        console.log('chay ham onEnd', defaultPage);
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        var datepick = `0${selectedDate.getDate().toString()}`.slice(-2)
        var monthpick = `0${selectedDate.getMonth() + 1}`.slice(-2);
        var yearpick = selectedDate.getFullYear().toString();
        var fullDate = monthpick + '/' + datepick + '/' + yearpick;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        if (dateStatus === 'from') return setDateFrom(fullDate);
        else return setDateTo(fullDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (

        <SafeAreaView style={{ backgroundColor: '#DDD', flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <HeaderComponent navigation={navigation} title='Lịch sử giao dịch' />
                {/* ----------------------------------------------------------tim_kiem */}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFF',
                    borderRadius: 20,
                    width: hScale(445),
                    height: vScale(45),
                    alignItems: 'center',
                    marginHorizontal: hScale(8),
                    marginVertical: vScale(5),
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flex: 1,
                        marginLeft: 5,
                    }}>
                        <TextInput
                            value={txtSearch}
                            placeholder="Mã tên hàng, Tên shop"
                            onChangeText={(text) => setTxtSearch(text)}
                        />
                    </View>

                    <TouchableOpacity style={{
                        height: vScale(45),
                        width: hScale(45),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        marginHorizontal: hScale(10)
                    }}>
                        <View>
                            <Image
                                style={{
                                    width: hScale(25),
                                    height: vScale(25),
                                    marginLeft: hScale(10)
                                }}
                                source={images.icon_search}
                            />
                        </View>
                    </TouchableOpacity>

                </View>

                {
                    visible
                        ?
                        <View style={{ height: vScale(380) }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={() => { showDatepicker(), setDateStatus('from') }}
                                >

                                    <View style={styles.text}>
                                        <Text>{dateFrom}</Text>

                                    </View>

                                    <Image
                                        source={images.icon_calendar}
                                        style={styles.ic_calendar}
                                    />
                                </TouchableOpacity>
                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        timeZoneOffsetInMinutes={0}
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}
                                <TouchableOpacity
                                    onPress={() => { showDatepicker(), setDateStatus('to') }}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                >
                                    <View style={styles.text}>

                                        <Text>{dateTo}</Text>

                                    </View>

                                    <Image
                                        source={images.icon_calendar}
                                        style={styles.ic_calendar}
                                    />
                                </TouchableOpacity>

                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        timeZoneOffsetInMinutes={0}
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}

                            </View>

                            {/* --------------------------------------------------------------------popup */}

                            <View style={{
                                width: hScale(445),
                                height: vScale(200),
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: vScale(5),
                                borderRadius: 10,

                            }}>
                                <MenuProvider>
                                    < Menu style={{
                                        borderWidth: 0.5,
                                        borderColor: '#808080',
                                        backgroundColor: '#fff',
                                        alignItems: 'center',
                                        height: vScale(40),
                                        width: hScale(445),
                                        justifyContent: 'center',
                                        marginLeft: hScale(3)
                                    }} >
                                        <MenuTrigger text={txtMenu} style={{ width: hScale(445), justifyContent: 'center', alignItems: 'center' }} />
                                        <MenuOptions>
                                            <FlatList
                                                data={tran_type}
                                                renderItem={({ item }) =>
                                                    <MenuOption
                                                        style={{ height: vScale(40), borderBottomColor: '#cdcdcd', borderBottomWidth: 0.5 }}
                                                        text={item.title}
                                                        onSelect={() => {
                                                            setStatus(item.code), setTxtMenu(item.title);
                                                        }} />
                                                }
                                                keyExtractor={() => Math.random()}
                                            />
                                        </MenuOptions>
                                    </Menu>
                                    <View style={{
                                        marginVertical: vScale(5),
                                        marginHorizontal: hScale(5),
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Button
                                            buttonStyle={styles.btn_search}
                                            titleStyle={{ fontSize: 13 }}
                                            title="Tìm kiếm"
                                            onPress={_onSearch}
                                        />
                                        <Button
                                            visible={visible}
                                            buttonStyle={styles.btn_search_advanced}
                                            titleStyle={{ fontSize: 13, color: '#000' }}
                                            title={title}
                                            onPress={onSearchAdvanced}
                                        />
                                    </View>
                                    <View style={{ marginTop: vScale(5), width: '100%' }}>
                                        <TranPriceComponent data_tran={data_tran} />
                                    </View>

                                </MenuProvider>

                            </View>


                        </View>

                        :
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                            <View style={{
                                marginVertical: vScale(5),
                                marginHorizontal: hScale(5),
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                            }}>
                                <Button
                                    buttonStyle={styles.btn_search}
                                    titleStyle={{ fontSize: 13 }}
                                    title="Tìm kiếm"
                                    onPress={_onSearch}
                                />
                                <Button
                                    visible={visible}
                                    buttonStyle={styles.btn_search_advanced}
                                    titleStyle={{ fontSize: 13, color: '#000' }}
                                    title={title}
                                    onPress={onSearchAdvanced}
                                />

                            </View>
                            <TranPriceComponent data_tran={data_tran} />
                        </View>
                }

                {/* -------------------------------------------------------------------------------------tong_tien_nap */}

                <View style={styleFlatlist} >

                    {
                        (data_list == null)
                            ? <LoadingCom /> :
                            (data_list.length !== 0)
                                ? <FlatList
                                    data={arrListTransaction ? arrListTransaction : data_list}
                                    renderItem={({ item }) => <RowItemTransaction txtSearch={txtSearch} item={item} />}
                                    keyExtractor={item => item.id}
                                    onEndReachedThreshold={0.5}
                                    onEndReached={() => onEndReached()}
                                />
                                : <Text>Không có dữ liệu</Text>
                    }


                </View>
            </View>
        </SafeAreaView >
    )
}


const mapStateToProps = (state) => {
    return {
        data: state.fetchTransactionReducers,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchTransaction: (params) => { dispatch(fetchTransactionAction(params)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeTransactionScreen)


const styles = StyleSheet.create({

    btn_search: {
        backgroundColor: '#fd2950',
        width: hScale(215),
        height: vScale(45),
        marginRight: hScale(12)

    },
    btn_search_advanced: {
        backgroundColor: '#FFF',
        width: hScale(215),
        height: vScale(45),
    },
    text: {
        width: hScale(175),
        height: vScale(45),
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: '#cdcdcd'
    },
    ic_calendar: {
        width: hScale(30),
        height: vScale(30),
        marginHorizontal: hScale(5),
        marginRight: hScale(10)
    },
    view_a: {
        width: '100%',
        height: vScale(235),
        borderColor: '#808080',
        borderWidth: 0.8,
        alignItems: 'center',
        paddingTop: vScale(10),
        backgroundColor: '#FFF'
    },
    view_b: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        width: hScale(415),
        height: vScale(70),
        marginTop: vScale(3)
    },
    view_e: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: hScale(415),
        height: vScale(70)
    },
    view_c: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderColor: '#808080',
        width: hScale(205),
        height: vScale(65),
        marginVertical: vScale(3)
    },
    view_d: {
        alignItems: 'center',
        justifyContent: 'center',
        width: hScale(205),
        height: vScale(65),
        marginVertical: vScale(3)

    },
    text_money: {
        paddingTop: vScale(8),
        fontWeight: 'bold'
    }
})
