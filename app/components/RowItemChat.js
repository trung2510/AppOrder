import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function RowItemChat({ item }) {

    const type_context = item ? item.type_context : null
    const is_customer = item ? item.is_customer : null

    function getViewStype(is_customer) {

        switch (is_customer) {

            case false:
                return { width: '100%', alignItems: 'flex-start' }
            case true:
                return { width: '100%', alignItems: 'flex-end' }
            default:
                return null
        }

    }

    function getMessageStyle(type_context) {
        switch (type_context) {
            case 'CHAT':
                return styles.chatText
            case "ACTIVITY":
                return styles.chatActivity
            default:
                return null
        }

    }


    return (
        <View style={{ flex: 10 }}>
            <View style={getViewStype(is_customer)} >
                <Text style={{ color: '#7F8184', marginLeft: 5, marginRight: 5 }} >{item.time}</Text>
                <Text style={getMessageStyle(type_context)}>{item.message}</Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    chatText: {
        maxWidth: '85%',
        fontSize: 15,
        padding: 8,
        color: '#6A7579',
        backgroundColor: '#DCF4FC',
        borderRadius: 8,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    chatActivity: {
        maxWidth: '85%',
        fontStyle: 'italic',
        color: '#A19D9D',
        fontSize: 18,
        padding: 8,
        backgroundColor: '#F2F6F9',
        borderRadius: 8,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    }
})



