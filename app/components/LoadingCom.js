
import React from 'react'
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native'

const LoadingCom = ({ visible }) => {
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                < View style={styles.centeredView} >
                    <View style={styles.modalView}>
                        <ActivityIndicator size="large" color="#f00" />
                    </View>
                </View >
            </Modal >
        </>
    )
}

export default LoadingCom

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        padding: 35,
        alignItems: "center",
    },
})


