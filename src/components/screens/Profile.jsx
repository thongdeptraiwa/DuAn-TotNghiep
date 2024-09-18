import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React from 'react'
import ProfileS from '../styles/screens/ProfileS';
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
import ProfilePost from '../custom/ProfilePost';
import { logout } from '../../rtk/Reducer';
let date = new Date().toDateString();

// test Thong
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../rtk/Reducer';
import { oStackHome } from '../../navigations/HomeNavigation';

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

const Profile = (props) => {
    const { navigation } = props;
    const user = useSelector(state => state.app.user);
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        ToastAndroid.show('Đã đăng xuất', ToastAndroid.SHORT)
    };
    const onLanguage = () => {
        dispatch(setLanguage());
    };

    return (
        <ScrollView style={[ProfileS.all, { backgroundColor: theme ? "#f7f7f7" : "#121212" }]}>
            <View style={ProfileS.superBox}>
                {/* header */}
                <View style={ProfileS.container}>
                    <TouchableOpacity onPress={onLanguage}>
                        <Icon name="arrow-back-circle" size={30} color={theme ? "black" : "white"} />
                    </TouchableOpacity>

                    <Text style={[ProfileS.h1, { color: theme ? "black" : "white" }]}>
                        {language ? "Profile" : "Trang cá nhân"}</Text>

                    <TouchableOpacity style={{ position: "absolute", right: 40 }} onPress={() => navigation.navigate(oStackHome.SelectImage.name)}>
                        <Icon name="add-circle-outline" size={30} color={theme ? "black" : "white"} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: "absolute", right: 0 }} onPress={onLogout}>
                        <Icon name="menu" size={30} color={theme ? "black" : "white"} />
                    </TouchableOpacity>
                </View>

                <View style={ProfileS.box}>
                    <Image style={ProfileS.avata} source={{ uri: user.avatar }} />
                    <Text style={[ProfileS.name, { color: theme ? "black" : "white" }]}>{user.displayName}</Text>
                    <Text style={[ProfileS.bio, { color: theme ? "black" : "white" }]}>{user.bio}</Text>
                </View>

                {/* <View style={ProfileS.contact}>
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
                </View> */}

                {/* List of posts */}
                {listPostProfile.map((item) => (
                    <ProfilePost key={item.id} dataProfile={item} />
                ))}

            </View>
        </ScrollView >
    )
}

export default Profile
