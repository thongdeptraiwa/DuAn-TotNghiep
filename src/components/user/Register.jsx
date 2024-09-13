import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Pressable, ToastAndroid } from 'react-native';
import styles from '../styles/user/LoginS';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomTextInputEmail, CustomTextInputPassword, CustomTextInputRePassword, CustomTextInputUserName } from '../custom/textinputs/CustomTextInput';
import { register } from '../../rtk/API';
import { useDispatch } from 'react-redux';
const Register = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  
  const [displayName, setdisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repass, setRepass] = useState('')

  const onRegister = () => {
    const userDataRegister = { displayName, email, password };
    
    dispatch(register(userDataRegister))
      .unwrap()
      .then((response) => {
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT)

        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log('Error:', error); 
      });
  };
  
  return (
    <View style={styles.ViewAll}>
      <View style={styles.container}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Icon name="arrow-back-circle" size={40} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Lets's{'\n'}Get Started</Text>
          <Text style={styles.subheaderText}>Please fill the details to create an account</Text>

          <CustomTextInputUserName
            placeholder="User name"
            value={displayName}
            onChangeText={setdisplayName} />

          <CustomTextInputEmail
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail} />

          <CustomTextInputPassword
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword} />

          <CustomTextInputRePassword
            placeholder="Re-enter password" />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={(onRegister)}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.signupText}>Sign up</Text>
        </Text>
      </View>
    </View>

  );
};

export default Register;
