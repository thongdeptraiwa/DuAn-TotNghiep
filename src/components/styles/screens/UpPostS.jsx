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
        //color: "black",
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
        height: 0.3
    },
    textWhite: {
        color: 'white'
    },
    name: {
        //color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        height: "auto",
        padding: 10
    },
    menu: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 200,
        height: 200
    },
    boxImage: {
        marginVertical: 30,
        alignItems: 'center',
    },
    box3: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textIcon: {
        marginLeft: 20,
        //color: 'black',
        fontSize: 17
    },
    state: {
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#81d4f9'
    },
    boxState: {
        marginTop: 10,
    },
    textState: {
        paddingLeft: 10,
        color: '#1e34ee',
        paddingVertical: 5
    },
    // model
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
    },
    optionButton: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
})

export default UpPostS