import { StyleSheet, Text, View } from 'react-native'

const SelectImageS = StyleSheet.create({
    box: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    close: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 22,
        //color: 'black'
    },
    h2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#03a9f4'
    },
    boxImage: {
        width: "100%",
        height: "70%",
        borderColor: 'red',
        borderWidth: 1
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        margin: 20,
        //backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    h3: {
        //color: 'white'
    },
    image: {
        width: "auto",
        height: "60%",
        resizeMode: 'cover',
    },
})

export default SelectImageS