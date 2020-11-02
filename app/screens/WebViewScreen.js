import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import { WebView } from 'react-native-webview';
import LoadingCom from '../components/LoadingCom';

const WebViewScreen = ({ navigation, route }) => {

    const link = route.params.link
    const pageTranslate = route.params.pageTranslate
    const title = route.params.title
    const style =
        `body {background: #fff;font-family: Arial, sans-serif;font-size: 12px;line-height: 18px;color: #454545;} 
        .App-Content { padding:10px}
        h3 { margin:0px; padding:10px 0px; font-size:18px; font-weight:normal; line-height:24px}
        .text-small { font-size:11px}
        .table td,.table th {background-color: #fff !important;}
        table {border-collapse: collapse !important;border-top: 1px solid #dcdcdc;border-left:1px solid #dcdcdc; font-size:11px}
        .table-bordered > tbody > tr > td {border-right: 1px solid #dcdcdc;border-bottom: 1px solid #dcdcdc;text-align: center;padding: 10px 3px;vertical-align: middle}
        ul { margin:0px; padding:8px 0px 8px 10px; list-style:outside}
        ol { list-style:decimal;margin:0px; padding:8px 0px 8px 10px;}
        ul li, ol li { padding-bottom:7px}
        ul li ol { margin:0px; padding-left:20px}
        ul li:last-child,ol li:last-child { padding-bottom:0}
        blockquote { border-left:3px solid #ED7600; margin:5px 0px; padding:5px 10px; background:#f8f8f8;}
        blockquote p { margin:0px; padding:0px 0px 5px}`

    return (
        <>
            <Header title={title} navigation={navigation} />
            <WebView
                injectedJavaScript={pageTranslate}
                style={style}
                source={{ uri: `${link}` }} />
          
        </>
    )
}

export default WebViewScreen
