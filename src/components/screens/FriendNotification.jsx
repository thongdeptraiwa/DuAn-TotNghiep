import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import FriendRequestItem from '../custom/FriendRequestItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import styles from '../styles/screens/FriendNoti';


const avt1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg'
const avt2 = 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg'
const avt3 = 'https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600'
const avt4 = 'https://afamilycdn.com/2019/2/25/photo-1-1551079860388720100606.jpg'
const avt5 = 'https://cdn.aicschool.edu.vn/wp-content/uploads/2024/05/anh-co-gai-xinh-1.jpg'
const avt6 = 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/3/19/asset/f9c0cecf5ec1/sub-buzz-503-1651604941-18.jpg?downsize=900:*&output-format=auto&output-quality=auto'
const avt7 = 'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/3/23/asset/dc9b6ca9069a/sub-buzz-735-1651619191-1.jpg?downsize=900:*&output-format=auto&output-quality=auto'
const avt8 = 'https://miro.medium.com/v2/resize:fit:1400/1*5NfcI64CDzBN2ZURDGjOuA.png'
const avt9 = 'https://kenh14cdn.com/zoom/279_174/2020/8/8/ba-ga-news-1-1596892491163685017002-crop-1596892506700962456041.jpg'

const friendRequests = [
    { id: 1, name: 'Khahan Pham', mutualFriends: 7, profilePicture: avt1, sentTime: '1 phút trước' },
    { id: 2, name: 'Dylan Pham', mutualFriends: 1, profilePicture: avt2, sentTime: '3 giờ' },
    { id: 3, name: 'Tr Thông', mutualFriends: 5, profilePicture: avt3, sentTime: '1 năm' },
    { id: 4, name: 'Vy Nguyễn', mutualFriends: 19, profilePicture: avt4, sentTime: '4 năm' },
    { id: 5, name: 'Táo Lướt Sài Gòn', mutualFriends: 10, profilePicture: avt5, sentTime: '45 tuần' },
    { id: 6, name: 'Loan Trần', mutualFriends: 5, profilePicture: avt6, sentTime: '2 ngày' },
    { id: 7, name: 'Minh Thảo', mutualFriends: 7, profilePicture: avt7, sentTime: '2 năm' },
    { id: 8, name: 'Hoàng Dương', mutualFriends: 1, profilePicture: avt8, sentTime: '50 tuần' },
    { id: 9, name: 'Anh Tuấn', mutualFriends: 5, profilePicture: avt9, sentTime: '1 năm' },
];


const FriendNotification = (props) => {

    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);

    return (
        <View style={[styles.container, { backgroundColor: theme ? "white" : "black" }]}>
            <View style={styles.HeaderWrap}>
                <Text style={[styles.title, { color: theme ? 'black' : 'white' }]}>  {language ? "Friends" : "Bạn bè"} </Text>
                <Icon
                    style={styles.findButton}
                    name="search"
                    size={25}
                    color={theme ? 'black' : "white"}
                />
            </View>
            <View style={styles.goiYWrap}>
                <Text style={[styles.goiY, { color: theme ? 'black' : 'white' }, { backgroundColor: theme ? '#e2e5ec' : '#393d3e' }]}> {language ? "Suggestions" : "Gợi ý"} </Text>
                <Text style={[styles.goiY, { color: theme ? 'black' : 'white' }, { backgroundColor: theme ? '#e2e5ec' : '#393d3e' }]}> {language ? "Your friends" : "Bạn bè"}</Text>
            </View>

            <View style={styles.titleWrap}>
                <Text style={[styles.title2, { color: theme ? 'black' : 'white' }]}> {language ? "Friend requests" : "Lời mời kết bạn"} </Text>
                <Text style={[styles.seeAll,]}> {language ? "See all" : "Xem tất cả"} </Text>
            </View>

            <FlatList
                data={friendRequests}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <FriendRequestItem
                        name={item.name}
                        mutualFriends={item.mutualFriends}
                        profilePicture={item.profilePicture}
                        sentTime={item.sentTime}
                    />
                )}
            />
        </View>
    );
};



export default FriendNotification;
