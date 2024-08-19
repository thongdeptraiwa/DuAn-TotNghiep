import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../rtk/API';
import Demo from '../components/Demo';

const AppNavigation = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts());
    return () => {
    }
  }, [])

  return (
    <NavigationContainer>
      {/* {
        user ? <ProductNavigation /> : <UserNavigation />
      } */}
      {/* <ProductNavigation /> */}
      <Demo />
    </NavigationContainer>
  )
}

export default AppNavigation