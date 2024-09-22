import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Pressable } from 'react-native';
import { CustomAccountCentre, CustomSaved, CustomComments, CustomTab, CustomLanguage, CustomTheme, CustomBin, CustomMoreSetting, CustomLogout } from '../custom/SettingCustom';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingS from '../styles/screens/Setting';
import { useSelector } from 'react-redux'
import { useContext } from 'react';
import { ThemeContext } from '../../assets/context/ThemeContext';
import colors from '../../assets/colors';
const Setting = (props) => {
  const { navigation } = props;

  const {theme} = useContext(ThemeContext)
  const activeColors = colors[theme.mode]
  const language = useSelector(state => state.app.language);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: activeColors.tertiary }}>
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