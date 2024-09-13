import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeS = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    },
    h1Black: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    avata: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 30,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    all: {
        backgroundColor: "#f7f7f7"
    },
    allBlack: {
        backgroundColor: "black"
    }

})

export default HomeS
