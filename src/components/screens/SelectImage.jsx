import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SelectImageS from '../styles/screens/SelectImageS'
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
import { Image } from 'react-native-animatable';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// test Thong
import { useSelector } from 'react-redux';

const SelectImage = (props) => {
    const { navigation } = props

    // Thong 
    const theme = useSelector(state => state.app.theme);
    const language = useSelector(state => state.app.language);

    const [image, setImage] = useState(null);
    // hàm chụp ảnh
    const onOpenCamera = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            }
            launchCamera(options, async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.errorMessage) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                }
                else {
                    console.log('response -> ', response);
                    setImage(response.assets[0].uri);
                    // upload
                    // await uploadImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenCamera -> ', error);
        }
    };

    //hàm lấy ảnh từ library
    const getImage = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            }
            launchImageLibrary(options, async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.errorMessage) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                }
                else {
                    console.log('response -> ', response);
                    setImage(response.assets[0].uri);
                    // upload
                    await uploadImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenCamera -> ', error);
        }
    };
    return (
        <View style={[{ height: "100%" }, { backgroundColor: theme ? "white" : "black" }]}>
            <View style={SelectImageS.box}>
                <View style={SelectImageS.close}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Icon name="close" size={35} color={theme ? "black" : "white"} style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                    <Text style={[SelectImageS.h1, { color: theme ? "black" : "white" }]}>{language ? "New post" : "Bài đăng mới"}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("UpPost")}>
                        <Text style={SelectImageS.h2}>{language ? "Next" : "Tiếp"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                image ? <Image
                    source={{ uri: image }}
                    style={SelectImageS.image} /> :
                    <View style={SelectImageS.boxImage}></View>
            }
            <View style={SelectImageS.option}>
                <TouchableOpacity style={[SelectImageS.btn, { backgroundColor: theme ? "black" : "white" }]} onPress={getImage}>
                    <Text style={[SelectImageS.h3, { color: theme ? "white" : "black" }]}>{language ? "Select Image" : "Chọn thư viện"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[SelectImageS.btn, { backgroundColor: theme ? "black" : "white" }]} onPress={onOpenCamera}>
                    <Text style={[SelectImageS.h3, { color: theme ? "white" : "black" }]}>{language ? "Take a picture" : "Chụp ảnh"}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SelectImage

