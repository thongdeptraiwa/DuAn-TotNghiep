import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import inputStyles from '../components/styles/TextInput';
export const CustomTextInputEmail = ({ placeholder, onChangeText }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <FontAwesomeIcon icon={faEnvelope} size={20} style={inputStyles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#64676c'}
        onChangeText={onChangeText}
        style={inputStyles.input}
        keyboardType="email-address"
      />
    </View>
  );
};

export const CustomTextInputPassword = ({ placeholder, onChangeText }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <FontAwesomeIcon icon={faLock} size={20} style={inputStyles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#64676c'}
        onChangeText={onChangeText}
        style={inputStyles.input}
        secureTextEntry
      />
    </View>
  );
};
