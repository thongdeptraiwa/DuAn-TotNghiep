import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileS from '../styles/screens/ProfileS';
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
import ProfilePost from '../custom/ProfilePost';
import { logout } from '../../rtk/Reducer';
let date = new Date().toDateString();

// Thong
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../rtk/Reducer';
import { oStackHome } from '../../navigations/HomeNavigation';
import { myPost } from '../../rtk/API';

const Profile = (props) => {
    const { navigation } = props;

    const dispatch = useDispatch();
    const user = useSelector(state => state.app.user);
    const token = useSelector(state => state.app.token);
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);

    const [posts, setPosts] = useState([]);


    const onMyPost = async () => {
        try {
            await dispatch(myPost({ userId: user._id, token: token }))
                .unwrap()
                .then((response) => {
                    ///console.log(response);
                    setPosts(response.posts);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });

        } catch (error) {
            console.log(error)
        }
    }
    //chạy lại sau mỗi lần render
    useEffect(() => {
        onMyPost();
        return () => {
        }
    })

    return (
        <ScrollView style={[ProfileS.all, { backgroundColor: theme ? "#f7f7f7" : "#242827" }]}>
            <View style={ProfileS.superBox}>
                {/* header */}
                <View style={ProfileS.container}>
                    {/* title */}
                    <Text style={[ProfileS.h1, { color: theme ? "black" : "white" }]}>
                        {language ? "Profile" : "Trang cá nhân"}</Text>

                    <TouchableOpacity style={{ position: "absolute", right: 40 }} onPress={() => navigation.navigate(oStackHome.SelectImage.name)}>
                        <Icon name="add-circle-outline" size={30} color={theme ? "black" : "white"} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: "absolute", right: 0 }} onPress={() => navigation.navigate("Setting")}>
                        <Icon name="menu" size={30} color={theme ? "black" : "white"} />
                    </TouchableOpacity>
                </View>

                <View style={ProfileS.box}>
                    <Image style={ProfileS.avata} source={{ uri: user.avatar }} />
                    <Text style={[ProfileS.name, { color: theme ? "black" : "white" }]}>{user.displayName}</Text>
                    <Text style={[ProfileS.bio, { color: theme ? "black" : "white" }]}>{user.bio}</Text>
                </View>


                {/* List of posts */}
                {posts.map((item) => (
                    <ProfilePost key={item._id} dataProfile={item} />
                ))}

            </View>
        </ScrollView >
    )
}

export default Profile
