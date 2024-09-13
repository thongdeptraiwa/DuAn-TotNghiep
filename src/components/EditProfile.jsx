import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
import EditProfileS from './styles/EditProfileS';
const EditProfile = () => {
  return (
    <View>
      <View style={EditProfileS.box}>
        <View style={EditProfileS.boxHeader}>
          <View>
            <TouchableOpacity style={EditProfileS.iconContainer}>
              <Icon name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={EditProfileS.boxh1}>
            <Text style={EditProfileS.h1}>Chỉnh sửa trang cá nhân</Text>
          </View>
        </View>
        <ScrollView>
          <View style={EditProfileS.changeAvatar}>
            <Image style={EditProfileS.avata} source={{ uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" }} />
            <View style={EditProfileS.boxH2}>
              <Text style={EditProfileS.h2}>Chỉnh sửa ảnh hoặc avatar</Text>
            </View>
          </View>
          <View style={EditProfileS.boxInformation}>
            <Text>Tên</Text>
            <Text style={EditProfileS.content}>Trung Nguyen</Text>
          </View>
          <View style={EditProfileS.boxInformation}>
            <Text>Gmail</Text>
            <Text style={EditProfileS.content}>trungyasuo020@gmail.com</Text>
          </View>
          <View style={EditProfileS.boxInformation}>
            <Text>Số điện thoại</Text>
            <Text style={EditProfileS.content}>+84912455367</Text>
          </View>
          <View style={EditProfileS.boxInformation}>
            <Text>Title</Text>
            <Text style={EditProfileS.content}>Nothing!</Text>
          </View>
          <View style= {EditProfileS.addLinkage}>
            <Text style={EditProfileS.content}>Thêm liên kết</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default EditProfile