import React, { useEffect } from 'react'
import Search from '../components/home/Search';
import Home from '../components/home/Home';
import Profile from '../components/user/Profile';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackHome = createNativeStackNavigator();

const HomeNavigation = () => {


  return (
    <StackHome.Navigator initialRouteName='Home' screenOptions={{
       animation: "fade"
    }}>

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

      <StackHome.Screen
        name='Search'
        component={Search}
        options={{ headerShown: false }}
      />


    </StackHome.Navigator>

  )
}

export default HomeNavigation