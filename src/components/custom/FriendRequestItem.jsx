import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles/custom/items/FriendsItem';

const FriendRequestItem = (props) => {
    const { name, mutualFriends, profilePicture, sentTime } = props; 
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);

    return (
        <View style={[styles.container, {backgroundColor: theme ? 'white' : 'black'}]}>
            <View style={styles.imgWrap}>
                <Image source={{ uri: profilePicture }} style={styles.image} />
            </View>
            <View style={styles.wrapper}>
                <View style={styles.info}>
                    <Text style={[styles.name,{color: theme ? 'black' : 'white'} ]}>{name}</Text>
                    <Text style={styles.sentTime}>{sentTime}</Text>
                </View>
                <View>
                    <Text style={styles.mutualFriends}>{mutualFriends} {language ? "mutual friends" : "bạn chung"}</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={[styles.acpButton, {backgroundColor: theme ? 'black' : 'white'}]}>
                        <Text style={[styles.acpTxt, {color: theme ? 'white' : 'black'} ]}> {language ? "Confirm" : "Xác nhận"} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.delButton, {backgroundColor: theme ? '#e2e5ec' : '#393d3e'}]}>
                        <Text style={[styles.delTxt, {color: theme ? 'black' : 'white'}]}> {language ? "Delete" : "Xóa"} </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};



export default FriendRequestItem;
