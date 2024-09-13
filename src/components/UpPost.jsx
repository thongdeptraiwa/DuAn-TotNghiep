import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import UpPostS from './styles/UpPostS'

import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác
const UpPost = () => {
  return (
    <View>
      <View style={UpPostS.allbox}>
        <View style={UpPostS.box}>
          <View>
            <TouchableOpacity>
              <Icon name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={UpPostS.h1}>
            <Text style={UpPostS.title}>Tạo bài viết</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={UpPostS.upload}>
            <Text style={UpPostS.textWhite}>Đăng bài</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={UpPostS.line}></View>
      <View style={UpPostS.allbox2}>
        <View style={UpPostS.box2}>
          <View>
            <Image style={UpPostS.avata} source={{ uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" }} />
          </View>
          <View style={UpPostS.h3}>
            <Text style={UpPostS.name}>Trung Nguyen</Text>
            <Text>Chỉ mình tôi</Text>
          </View>
        </View>
        <View style={UpPostS.content}>
          <TextInput placeholder="Bạn đang nghĩ gì ?"
            multiline={true} // Cho phép nhiều dòng
            textAlignVertical="top" // Văn bản sẽ bắt đầu từ trên cùng
          />
        </View>
        <View style={UpPostS.menu}>

          <View>
            <TouchableOpacity>
              <Icon name="image" size={25} color="green" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="pricetag" size={25} color="#137df7" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="location" size={25} color="red" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="camera" size={25} color="blue" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="musical-notes" size={25} color="orange" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default UpPost