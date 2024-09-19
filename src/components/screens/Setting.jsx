import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Pressable } from 'react-native';
import { CustomAccountCentre, CustomSaved, CustomComments, CustomTab, CustomLanguage, CustomTheme, CustomBin, CustomMoreSetting, CustomLogout } from '../custom/SettingCustom';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingS from '../styles/screens/Setting';
import { useSelector } from 'react-redux';

const Setting = (props) => {
  const { navigation } = props;

  const theme = useSelector(state => state.app.theme);
  const language = useSelector(state => state.app.language);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme ? '#fff' : "#242827" }}>
      <View style={SettingS.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={theme ? "black" : "white"} style={SettingS.icon} />
        </Pressable>
        <Text style={[SettingS.headerText, { color: theme ? "black" : "white" }]}>{language ? "Settings and security" : "Cài đặt và bảo mật"}</Text>
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
