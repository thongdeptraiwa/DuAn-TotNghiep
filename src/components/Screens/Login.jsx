import React from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import styles from '../styles/Login';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomTextInputEmail, CustomTextInputPassword } from '../../custom/CustomTextInput';

const Login = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.ViewAll}>

      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Icon name="arrow-back-circle" size={40} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Hey,{'\n'}Welcome Back</Text>
          <Text style={styles.subheaderText}>Please login to continue</Text>


          <CustomTextInputEmail
            placeholder="Enter your email" />

          <CustomTextInputPassword
            placeholder="Enter your password" />
        </View>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.signupText}>Sign up</Text>
        </Text>
      </View>
    </View>

  );
};

export default Login;
