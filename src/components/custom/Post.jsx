import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react'
import PostS from '../styles/custom/PostS'
import Modal from 'react-native-modal';
// npm install react-natnpm ruive-vector-icons
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
import Comments from './Comments';

// npm i @gorhom/bottom-sheet
// npm install react-native-reanimated react-native-gesture-handler
// add reanimated in babel
//clear cache : npx react-native start --reset-cache
const Post = (props) => {
    const { dataP } = props
    const [like, setLike] = useState(false)
    const bottomSheetRef = useRef(null)

    const handleOpenComments = () => {
        bottomSheetRef.current?.snapToIndex(0)
    }

    return (
        <View style={PostS.container}>
            <View style={PostS.h2}>
                <View style={PostS.header}>
                    <View>
                        <Image style={PostS.avata} source={{ uri: dataP.avata }} />
                    </View>
                    <View>
                        <Text style={PostS.name}>{dataP.name}</Text>
                        <Text style={PostS.fontDate}>{dataP.date}</Text>
                    </View>
                </View>
                <View>
                    <Icon name="ellipsis-horizontal-sharp" size={20} color="black" style={{ marginRight: 15 }} />
                </View>
            </View>
            <View style={PostS.body}>
                <Text style={PostS.title}>{dataP.content}</Text>
                <Image style={PostS.image} source={{ uri: dataP.image }} />
            </View>

            {/* tương tác bài đăng */}
            <View style={PostS.interact}>
                <TouchableOpacity onPress={() => { setLike(!like) }}>
                    <Icon name={like != true ? "heart-outline" : "heart"} size={30} color="red" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOpenComments}>
                    <Icon name="chatbox-ellipses-outline" size={30} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <Icon name="share-social-outline" size={30} color="black" />
            </View>

            {/* BottomSheet Comments */}
            <Comments ref={bottomSheetRef} />
        </View >
    )
}
export default Post
