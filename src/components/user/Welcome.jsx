import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/user/WelcomeS';

const Welcome = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/ASM-react2%2Fdu_an_tot_nghiep%2Flogo%2Fwelcome.png?alt=media&token=80c538d2-bf38-4a00-b5f5-aae503aeab98' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>LinkUp!</Text>
      <Text style={styles.subtitle}>Where every thought finds a home and every image tells a story.</Text>
      
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Getting Started</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>
        Do you have account? <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Login</Text>
      </Text>
    </View>
  );
}

export default Welcome;


