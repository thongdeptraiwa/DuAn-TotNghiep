import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PostS from '../styles/PostS'
import Modal from 'react-native-modal';
// npm install react-natnpm ruive-vector-icons
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
const Post = (props) => {
    const { dataP } = props
    const [like, setLike] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
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
                <TouchableOpacity onPress={toggleModal}>
                    <Icon name="chatbox-ellipses-outline" size={30} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <Icon name="share-social-outline" size={30} color="black" />
            </View>



            {/* Chưa tách component ra tạm thời để đây nhé ae */}
            
            {/* Modal hiển thị bình luận */}
            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <View style={PostS.modalContent}>
                    <Text style={PostS.modalHeader}>Comments</Text>
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
                    {/* thêm danh sách bình luận ở đây */}
                    <View style = {PostS.line}/>
                    {/* Thêm input cho bình luận mới */}
                    <View style={PostS.inputContainer}>
                        <TextInput style={PostS.input} placeholder="Nhập bình luận..." />
                        <TouchableOpacity>
                            <Icon name="send" size={30} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    )
}
export default Post
