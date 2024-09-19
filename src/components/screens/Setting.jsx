import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Pressable } from 'react-native';
import { CustomAccountCentre, CustomSaved, CustomComments, CustomTab, CustomLanguage, CustomTheme, CustomBin, CustomMoreSetting, CustomLogout } from '../custom/SettingCustom'; 
import Icon from 'react-native-vector-icons/Ionicons';
import SettingS from '../styles/screens/Setting';

const Setting = (props) => {
    const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={SettingS.header}>
            <Pressable onPress={()=> navigation.navigate("Profile")}>
             <Icon name= "arrow-back" size={30} style={SettingS.icon} />
            </Pressable>
            <Text style={SettingS.headerText}>Cài đặt và bảo mật</Text>
        </View>
      <CustomAccountCentre />
      <CustomSaved />
      <CustomComments />
      <CustomTab />
      <CustomLanguage />
      <CustomTheme />
      <CustomBin />
      <CustomMoreSetting />
      <CustomLogout />
    </SafeAreaView>
  );
};

export default Setting;
