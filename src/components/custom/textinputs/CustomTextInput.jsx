import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock, faUser, faRedo } from '@fortawesome/free-solid-svg-icons';
import inputStyles from '../../styles/custom/textinputs/TextInputS';
import searchStyles from '../../styles/custom/textinputs/TextInputSearchS';
import Icon from 'react-native-vector-icons/Ionicons'; // Hoặc một bộ icon khác

export const CustomTextInputUserName = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <FontAwesomeIcon icon={faUser} size={20} style={inputStyles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#64676c'}
        onChangeText={onChangeText}
        style={inputStyles.input}
        value={value}
        keyboardType="email-address"
      />
    </View>
  );
};

export const CustomTextInputEmail = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <FontAwesomeIcon icon={faEnvelope} size={20} style={inputStyles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#64676c'}
        onChangeText={onChangeText}
        style={inputStyles.input}
        value={value}
        keyboardType="email-address"
      />
    </View>
  );
};

export const CustomTextInputPassword = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <FontAwesomeIcon icon={faLock} size={20} style={inputStyles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#64676c'}
        onChangeText={onChangeText}
        style={inputStyles.input}
        value={value}
        secureTextEntry
      />
    </View>
  );
};

export const CustomTextInputRePassword = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <FontAwesomeIcon icon={faRedo} size={20} style={inputStyles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#64676c'}
        onChangeText={onChangeText}
        style={inputStyles.input}
        value={value}
        secureTextEntry
      />
    </View>
  );
};

export const CustomTextInputSearch = ({ placeholder, onChangeText, value , placeholderTextColor}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: 1, padding: 3}}>
      <Icon name="arrow-back-outline" size={30} color="black" style={{ marginRight: 5 }} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={searchStyles.input}
        placeholderTextColor={placeholderTextColor}
      />
    </View>

  );
};
