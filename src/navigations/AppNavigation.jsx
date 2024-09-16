import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import HomeNavigation from './HomeNavigation';
import UserNavigation from './UserNavigation';
import Welcome from '../components/screens/Welcome';


const AppNavigation = () => {
  const user = useSelector(state => state.app.user);

  const [ShowManHinhChao, setShowManHinhChao] = useState(true);
  //chỉ chạy 1 lần đầu
  useEffect(() => {
    // sau time tắc màn hình chào
    setTimeout(() => {
      setShowManHinhChao(false);
    }, 100)// time
    return () => {
    }
  }, [])

  //console.log(user);

  return (
    <NavigationContainer>
      {
        ShowManHinhChao ?
          <Welcome />
          : (user ? <HomeNavigation /> : <UserNavigation />)
      }
    </NavigationContainer>
  )
}

export default AppNavigation