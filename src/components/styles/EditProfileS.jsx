import { StyleSheet, Text, View } from 'react-native'

const EditProfileS = StyleSheet.create({
    box: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    boxHeader: {
        flexDirection: 'row',
    },
    h1: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    boxh1: {
        flex: 1, // Chiếm toàn bộ không gian giữa các phần tử
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'absolute',
        left: 0, // Đặt biểu tượng ở bên trái
    },
    avata: {
        width: 80,
        height: 80,
        borderRadius: 90,
    },
    changeAvatar: {
        alignItems: 'center',
        marginTop: 40
    },
    boxH2:{
        marginTop:20
    },
    h2:{
        color:'#137df7',
        fontWeight:'bold'
    },
    boxInformation:{
        marginTop:20,
        borderRadius: 10,
        borderWidth: 0.5,
        padding:10
    },
    content:{
        marginTop:10,
        color:'black',
        fontSize:17
    },
    addLinkage:{
        marginTop:10,   
    }
})

export default EditProfileS