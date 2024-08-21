import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PostS from '../components/styles/PostS';
// npm install react-natnpm ruive-vector-icons
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
import * as Animatable from 'react-native-animatable';

const Post = (props) => {
    const { dataP } = props
    const [like, setLike] = useState(false)
    const [hearts, setHearts] = useState([]);

    const handleLike = () => {
        setLike(!like);

        if (!like) {
            const newHeart = (
                <Animatable.View
                    key={Date.now()}
                    animation="bounceIn"
                    duration={500}
                    style={styles.heartAnimation}
                    onAnimationEnd={() => removeHeart(Date.now())}
                >
                    <Icon name="heart" size={30} color="red" />
                </Animatable.View>
            );

            setHearts((prevHearts) => [...prevHearts, newHeart]);

            // Auto-remove heart after animation (1s)
            setTimeout(() => {
                removeHeart(Date.now());
            }, 1000);
        }
    };

    const removeHeart = (key) => {
        setHearts((prevHearts) => prevHearts.filter((heart) => heart.key !== key));
    };

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
                <Text style={PostS.title}>{dataP.title}</Text>
                <Image style={PostS.image} source={{ uri: dataP.image }} />
            </View>
            <View style={PostS.interact}>
                <TouchableOpacity onPress={() => { setLike(!like) }}>
                    <Icon name={like != true ? "heart-outline" : "heart"} size={30} color="red" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <Icon name="chatbox-ellipses-outline" size={30} color="black" style={{ marginRight: 15 }} />
                <Icon name="share-social-outline" size={30} color="black" />
            </View>
        </View >
    )
}

export default Post
