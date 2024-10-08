import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import HomeNavigation from './HomeNavigation';
import UserNavigation from './UserNavigation';


const AppNavigation = () => {
  const user = useSelector(state => state.app.user)


  return (
    <NavigationContainer>
      {
        user ? <HomeNavigation /> : <UserNavigation />
      }
    </NavigationContainer>
  )
}

export default AppNavigation