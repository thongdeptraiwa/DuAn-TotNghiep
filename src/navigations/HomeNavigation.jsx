import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from '../components/user/Login';
import Welcome from '../components/user/Welcome';
import Home from '../components/home/Home';
import Profile from '../components/user/Profile';
import Register from '../components/user/Register';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackHome = createNativeStackNavigator();

const HomeNavigation = () => {
  

  return (
      <StackHome.Navigator initialRouteName='Home'>
       
        <StackHome.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />

        <StackHome.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />


      </StackHome.Navigator>
    
  )
}

export default HomeNavigation