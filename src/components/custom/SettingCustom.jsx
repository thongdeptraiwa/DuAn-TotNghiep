import React, { useState } from 'react';
import MenuSettingS from '../styles/custom/items/MenuSetting';
import { logout, setTheme } from '../../rtk/Reducer';
import { useDispatch } from 'react-redux';
import { View, Text, Pressable, ToastAndroid, Switch, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 
export const CustomAccountCentre = () => {
    return(
      <Pressable>
      <View style={MenuSettingS.section}> 
      <Icon name="people-circle-outline" size={30} style={MenuSettingS.icon} />
              <Text style={MenuSettingS.textSection}>Account Centre </Text>
      </View>
      </Pressable>
   )
  };

export const CustomSaved = () => {
  return(
    <Pressable>
    <View style={MenuSettingS.section}> 
    <Icon name="bookmark-outline" size={30} style={MenuSettingS.icon} />
            <Text style={MenuSettingS.textSection}>Saved </Text>
    </View>
    </Pressable>
 )
};

export const CustomComments = () => {
   
    return(
      <Pressable>
      <View style={MenuSettingS.section}> 
      <Icon name="chatbubble-outline" size={30} style={MenuSettingS.icon} />
              <Text style={MenuSettingS.textSection}>Comments </Text>
      </View>
      </Pressable>
   )
  };

export const CustomTab = () => {
    return(
        <Pressable>
        <View style={MenuSettingS.section}> 
        <Icon name="pricetag-outline" size={30} style={MenuSettingS.icon} />
                <Text style={MenuSettingS.textSection}>Tabs and mentions </Text>
        </View>
        </Pressable>
     )
};

export const CustomLanguage = () => {
 return(
    <Pressable>
    <View style={MenuSettingS.section}> 
    <Icon name="globe-outline" size={30} style={MenuSettingS.icon} />
            <Text style={MenuSettingS.textSection}>Language</Text>
    </View>
    </Pressable>
 )
};

export const CustomTheme = () => {
    const [switchValue, setSwitchValue] = useState(false);
    const dispatch = useDispatch();
    const onTheme = () => {
         dispatch(setTheme());
         setSwitchValue(prevValue => !prevValue);
            }

    return (
            <View style={MenuSettingS.section}>
                <Icon name={switchValue ? "moon" : "sunny-outline"} size={30} style={MenuSettingS.icon} />
                <Pressable onPress={onTheme}>
                <Switch
                    trackColor={{ false: "#eee", true: "#333" }} 
                    thumbColor={switchValue ? "#fff" : "#000"} 
                    ios_backgroundColor="#eee"// Màu nền của Switch trên iOS khi ở trạng thái tắt
                    onValueChange={onTheme}
                    value={switchValue}
                />
                </Pressable>
            </View>
    );
};



export const CustomBin = () => {
    return(
       <Pressable>
       <View style={MenuSettingS.section}> 
       <Icon name="trash-bin-outline" size={30} style={MenuSettingS.icon} />
               <Text style={MenuSettingS.textSection}>Bin</Text>
       </View>
       </Pressable>
    )
   };

export const CustomMoreSetting = () => {
    return(
       <Pressable>
       <View style={MenuSettingS.section}> 
       <Icon name="settings-outline" size={30} style={MenuSettingS.icon} />
               <Text style={MenuSettingS.textSection}>More Setting</Text>
       </View>
       </Pressable>
    )
   };


export const CustomLogout = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        Alert.alert(
            "Xác nhận đăng xuất",
            "Bạn có chắc chắn muốn đăng xuất?",
            [
                {
                    text: "Hủy",
                    onPress: () => console.log("Đã hủy"),
                    style: "cancel"
                },
                { 
                    text: "Đăng xuất", 
                    onPress: () => {
                        dispatch(logout());
                        ToastAndroid.show('Đã đăng xuất', ToastAndroid.SHORT);
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return(
        <Pressable onPress={onLogout}>
            <View style={MenuSettingS.section}>
                <Icon name="log-out-outline" size={30} style={MenuSettingS.icon} color="#FF0000" />
                <Text style={MenuSettingS.textSection}>Logout</Text>
            </View>
        </Pressable>
    );

};

