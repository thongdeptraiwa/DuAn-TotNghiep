import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UpPostS = StyleSheet.create({
    allbox2: {
        marginHorizontal: 15,
        marginTop: 20
    },
    h3: {
        marginLeft: 10
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    avata: {
        width: 50,
        height: 50,
        borderRadius: 90
    },
    title: {
        color: "black",
        fontSize: 17
    },
    upload: {
        backgroundColor: "#70a6e3",
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        marginLeft: 10
    },
    allbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 14,
        alignItems: 'center'
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        backgroundColor: 'black',
        height: 0.5
    },
    textWhite: {
        color: 'white'
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    content: {
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        height: "40%",
        padding: 5
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        padding:10
    }
})

export default UpPostS