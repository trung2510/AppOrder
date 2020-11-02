import React from 'react'
import Item_Infor_Product from '../components/Item_Infor_Product.js'
import {FlatList} from 'react-native'
import { images } from '../assets/images'

export default function View_Toggle_Product() {
    const data = [
        {
            nameProduct: 'shoe',
            imgProduct: images.img_vay
        },
        {
            nameProduct: 'vay',
            imgProduct: images.img_vay
        },
        {
            nameProduct: 'quan',
            imgProduct: images.img_vay
        },
    ]
    return (
        <FlatList
        data={data}
        renderItem={({ item }) => <Item_Infor_Product item={item} />}
        keyExtractor={item => item.nameProduct}
    />
    )
}
