import React from 'react'
import { View} from 'react-native'

import Dialog from "react-native-dialog";

export default function MyDialogNoInput({ title, dialogVisible, handleCancel, handleDelete, note, rightButton }) {
    return (

        <View>

            <Dialog.Container visible={dialogVisible}>
                <Dialog.Title style={{ color: 'red' }}>{title}</Dialog.Title>
                <Dialog.Description>{note}</Dialog.Description>
                <Dialog.Button label="Hủy bỏ" onPress={() => handleCancel()} />
                <Dialog.Button label={rightButton} onPress={() => handleDelete()} />
            </Dialog.Container>
        </View>
    )
}