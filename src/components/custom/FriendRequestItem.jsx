import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
// test Thong
import { useSelector } from 'react-redux';

const FriendRequestItem = ({ name, mutualFriends, profilePicture, sentTime }) => {

    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);

    return (
        <View style={styles.container}>
            <View style={styles.imgWrap}>
                <Image source={{ uri: profilePicture }} style={styles.image} />
            </View>
            <View style={styles.wrapper}>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.sentTime}>{sentTime}</Text>
                </View>
                <View>
                    <Text style={styles.mutualFriends}>{mutualFriends} bạn chung</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.acpButton}>
                        <Text style={styles.acpTxt}>{language ? "Accept" : "Xác nhận"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.delButton, { backgroundColor: theme ? "grey" : "#393d3e" }]}>
                        <Text style={styles.delTxt}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10

    },
    imgWrap: {
        width: '30%'
    },
    wrapper: {
        width: '70%'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 500,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        color: 'white',
        marginLeft: 10
    },
    mutualFriends: {
        color: 'gray',
        marginLeft: 10,
        marginTop: 10,
        fontWeight: '600'
    },
    sentTime: {
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    acpButton: {
        backgroundColor: '#0265ff',
        borderRadius: 10,
        width: '46%',
        height: 35,
        marginLeft: 10,
        justifyContent: 'center'

    },
    acpTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center'
    },
    delButton: {
        ///backgroundColor: '#393d3e',
        width: '46%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    delTxt: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600'
    }
});

export default FriendRequestItem;
