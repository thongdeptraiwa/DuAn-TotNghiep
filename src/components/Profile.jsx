import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProfileS from './styles/ProfileS';
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
import ProfilePost from './flatlist/ProfilePost';

let date = new Date().toDateString()
const listPostProfile = [
    {
        id: 1,
        name: "Trung Nguyen",
        date: date,
        avata: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
        title: "Have a nice day",
        image: "https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg"
    },
    {
        id: 2,
        name: "Trung Nguyen",
        date: date,
        avata: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
        title: "Bruh",
        image: "https://www.didongmy.com/vnt_upload/news/05_2024/anh-27-meme-dang-yeu-didongmy.jpg"
    },
    {
        id: 3,
        name: "Trung Nguyen",
        date: date,
        avata: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
        title: "OMG !!",
        image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/12/dtcl-meta-tft-13-24-thumb.jpg"
    },
]
const Profile = () => {
    return (
        <View style={ProfileS.all}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <View style={ProfileS.superBox}>
                    <View style={ProfileS.container}>
                        <View>
                            <TouchableOpacity>
                                <Icon name="arrow-back-circle" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={ProfileS.h1}>Profile</Text>
                        </View>
                        <View>
                            <TouchableOpacity style = {{backgroundColor:'#f3a8ac', borderRadius: 90, padding: 5}}>
                                <Icon name="log-out-outline" size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ProfileS.box}>
                        <Image style={ProfileS.avata} source={{ uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" }} />
                        <Text style={ProfileS.name}>Trung Nguyen</Text>
                        <Text style={ProfileS.country}>VietNam</Text>
                    </View>
                    <View style={ProfileS.contact}>
                        <View style={ProfileS.row}>
                            <Icon name="mail-outline" size={20} color="gray" />
                            <Text style={ProfileS.h3}>trungyasuo020@gmail.com</Text>
                        </View>
                        <View style={ProfileS.row}>
                            <Icon name="call-outline" size={20} color="gray" />
                            <Text style={ProfileS.h3}>+84912455367</Text>
                        </View>
                    </View>
                    <View style={ProfileS.content}>
                        <Text style={ProfileS.bio}>
                            "Nothing !"
                        </Text>
                    </View>
                    <FlatList
                        style={{ marginTop: 20 }}
                        data={listPostProfile}
                        renderItem={({ item }) => <ProfilePost dataProfile={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile
