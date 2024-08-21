import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../rtk/API';
import Home from '../components/Home';
import Profile from '../components/Profile';
const AppNavigation = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(listProducts());
  //   return () => {
  //   }
  // }, [])

  return (
    <NavigationContainer>
      {/* {
        user ? <ProductNavigation /> : <UserNavigation />
      } */}
      {/* <ProductNavigation /> */}
      {/* <Home /> */}
      <Profile />
    </NavigationContainer>
  )
}

export default AppNavigation