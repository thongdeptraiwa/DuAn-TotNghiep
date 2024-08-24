import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from '../components/user/Login';
import Welcome from '../components/user/Welcome';
import Home from '../components/home/Home';
import Profile from '../components/user/Profile';
import Register from '../components/user/Register';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigation from './HomeNavigation';
import UserNavigation from './UserNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const user = useSelector(state => state.app.user)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(listProducts());
  //   return () => {
  //   }
  // }, [])

  return (
    <NavigationContainer>
       {
        user ? <HomeNavigation /> : <UserNavigation />
      }
    </NavigationContainer>
  )
}

export default AppNavigation