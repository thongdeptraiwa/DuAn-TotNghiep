import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeS = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
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
    }
})

export default HomeS
