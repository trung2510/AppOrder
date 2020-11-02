import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Dialog from "react-native-dialog";

export default function MyDialog({ title, dialogVisible, handleCancel, handleDelete, placeholder, note, rightButton, valueTxt, setValueTxt }) {

    // const [valueTxt, setValueTxt] = useState('')

    return (
        <View>
            <Dialog.Container visible={dialogVisible}>
                <Dialog.Title style={{ color: 'red' }}>{title}</Dialog.Title>
                <Dialog.Description>{note}</Dialog.Description>
                <Dialog.Input
                    style={{ borderColor: '#808080', borderWidth: 0.5 }}
                    placeholder={placeholder}
                    value={valueTxt}
                    onChangeText={(text) => setValueTxt(text)}
                />
                <Dialog.Button label="Hủy bỏ" onPress={() => handleCancel()} />
                <Dialog.Button label={rightButton} onPress={() => handleDelete()} />
            </Dialog.Container>
        </View>
    )
}