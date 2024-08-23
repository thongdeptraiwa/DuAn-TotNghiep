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
        image: "data:image/jpeg;base64,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"
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
