import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostS = StyleSheet.create({
    container: {
        marginBottom: 30,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff', // Màu nền cần thiết cho hiệu ứng đổ bóng
    },
    header: {
        flexDirection: "row",
        alignItems: 'center'
    },
    avata: {
        width: 40,
        height: 40,
        borderRadius: 90,
        marginRight: 10
    },
    fontDate: {
        fontSize: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray'
    },
    image: {
        width: 'auto',
        height: 200,
        borderRadius: 10,
        marginTop: 10
    },
    body: {
        marginTop: 13
    },
    title: {
        marginLeft: 10,
        color: 'black'
    },
    interact: {
        flexDirection: 'row',
        marginTop: 20,
    },
    h2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        minHeight: 300,
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    comment: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    line: {
        borderColor:'black',
        borderWidth: 0.2,
        marginVertical: 20
    }
})

export default PostS
