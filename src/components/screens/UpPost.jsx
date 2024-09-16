import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import UpPostS from '../styles/screens/UpPostS';
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác

// test Thong
import { useSelector } from 'react-redux';

const UpPost = (props) => {
  const { navigation } = props

  // Thong 
  const user = useSelector(state => state.app.user);
  const theme = useSelector(state => state.app.theme);
  const language = useSelector(state => state.app.language);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(language ? "Public" : "Công khai");

  // Các tùy chọn trạng thái
  const options = ['Chỉ mình tôi', 'Bạn bè', 'Công khai'];
  const options2 = ['Just me', 'Friends', 'Public'];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };
  return (
    <View>
      <ScrollView style={[{ height: "100%" }, { backgroundColor: theme ? "white" : "black" }]}>
        <View style={UpPostS.allbox}>
          <View style={UpPostS.box}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('SelectImage')}>
                <Icon name="arrow-back" size={30} color={theme ? "black" : "white"} />
              </TouchableOpacity>
            </View>
            <View style={UpPostS.h1}>
              <Text style={[UpPostS.title, { color: theme ? "black" : "white" }]}>{language ? "creat post" : "Tạo bài viết"}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={UpPostS.upload}>
              <Text style={UpPostS.textWhite}>{language ? "Up post" : "Đăng bài"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={UpPostS.line}></View>
        <View style={UpPostS.allbox2}>
          <View style={UpPostS.box2}>
            <View>
              <Image style={UpPostS.avata} source={{ uri: user.avatar }} />
            </View>
            <View style={UpPostS.h3}>
              <Text style={[UpPostS.name, { color: theme ? "black" : "white" }]}>{user.displayName}</Text>
              <View style={UpPostS.boxState}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                >
                  <View style={UpPostS.state}>
                    <Text style={UpPostS.textState}>{selectedOption}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={UpPostS.boxImage}>
            <Image style={UpPostS.image} source={{ uri: "file:///data/user/0/com.react2thi/cache/rn_image_picker_lib_temp_3527c21a-30eb-456e-bc98-7747bdedab8b.jpg" }} />
          </View>
          <TextInput placeholder={language ? "What are you thinking ?" : "Bạn đang nghĩ gì ?"}
            multiline={true} // Cho phép nhiều dòng
            placeholderTextColor={theme ? "black" : "black"}
            style={[UpPostS.content, { backgroundColor: theme ? "grey" : "grey" }]}
            textAlignVertical="top" // Văn bản sẽ bắt đầu từ trên cùng
          />
        </View>
        <View style={[UpPostS.line]}></View>
        <TouchableOpacity>
          <View style={UpPostS.menu}>
            <View style={UpPostS.box3}>
              <Icon name="pricetag-outline" size={25} color={theme ? "black" : "white"} />
              <Text style={[UpPostS.textIcon, { color: theme ? "black" : "white" }]}>{language ? "Tag people" : "Gắn thẻ"}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color={theme ? "black" : "white"} />
          </View>
        </TouchableOpacity>
        <View style={[UpPostS.line]}></View>

        <TouchableOpacity>
          <View style={UpPostS.menu}>
            <View style={UpPostS.box3}>
              <Icon name="location-outline" size={25} color={theme ? "black" : "white"} />
              <Text style={[UpPostS.textIcon, { color: theme ? "black" : "white" }]}>{language ? "Location" : "Địa chỉ"}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color={theme ? "black" : "white"} />
          </View>
        </TouchableOpacity>
        <View style={[UpPostS.line]}></View>
      </ScrollView >

      {/* Modal để hiển thị danh sách */}
      < Modal
        transparent={true}  // Cho phép nền của modal trong suốt, giúp nhìn thấy nền bên dưới modal.
        visible={modalVisible}  // Điều khiển việc modal có hiển thị hay không dựa trên trạng thái `modalVisible`.
        animationType="slide"  // Hiệu ứng khi modal xuất hiện. Ở đây là kiểu "slide" từ dưới lên.
        onRequestClose={() => setModalVisible(false)}  // Khi modal bị yêu cầu đóng (ví dụ trên Android khi bấm nút back), hàm này sẽ được gọi để đóng modal.
      >
        <TouchableOpacity
          style={UpPostS.modalOverlay}  // Overlay của modal, tạo hiệu ứng làm mờ nền dưới modal.
          onPress={() => setModalVisible(false)}  // Đóng modal khi người dùng chạm vào khu vực bên ngoài modal.
        >
          {/* // Nội dung chính của modal, nơi hiển thị các tùy chọn. */}
          <View style={UpPostS.modalContent}>
            {language ? (
              options2.map((option, index) => (
                <TouchableOpacity
                  key={index}  // Mỗi phần tử trong danh sách cần có một key duy nhất.
                  style={UpPostS.optionButton}  // Styling cho mỗi nút tùy chọn trong danh sách.
                  onPress={() => handleSelectOption(option)}  // Khi người dùng chọn một tùy chọn, hàm này sẽ được gọi để cập nhật trạng thái và đóng modal.
                >
                  {/* // Hiển thị tên của tùy chọn. */}
                  <Text style={UpPostS.optionText}>{option}</Text>
                </TouchableOpacity>
              )))
              : (options.map((option, index) => (
                <TouchableOpacity
                  key={index}  // Mỗi phần tử trong danh sách cần có một key duy nhất.
                  style={UpPostS.optionButton}  // Styling cho mỗi nút tùy chọn trong danh sách.
                  onPress={() => handleSelectOption(option)}  // Khi người dùng chọn một tùy chọn, hàm này sẽ được gọi để cập nhật trạng thái và đóng modal.
                >
                  {/* // Hiển thị tên của tùy chọn. */}
                  <Text style={UpPostS.optionText}>{option}</Text>
                </TouchableOpacity>
              )))}
          </View>
        </TouchableOpacity>
      </Modal >

    </View >
  )
}

export default UpPost